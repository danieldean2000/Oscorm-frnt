'use client';

import { useEffect, useRef, useState } from 'react';

interface BlogAudioPlayerProps {
  htmlContent: string;
}

export default function BlogAudioPlayer({ htmlContent }: BlogAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const textRef = useRef('');

  // Extract plain text from HTML
  const extractText = (html: string) => {
    if (typeof document === 'undefined') return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelectorAll('script,style').forEach(e => e.remove());
    return div.textContent?.replace(/\s+/g, ' ').trim() || '';
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    textRef.current = extractText(htmlContent);
    setDuration(Math.ceil(textRef.current.split(' ').length / 2.5));
    return () => {
      if (typeof window !== 'undefined') {
        speechSynthesis.cancel();
      }
    };
  }, [htmlContent]);

  const play = () => {
    if (!textRef.current || typeof window === 'undefined') return;

    speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(textRef.current);
    utter.lang = 'en-US';

    utter.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setCurrentTime(t => t + 1);
      }, 1000);
    };

    utter.onend = () => {
      stop();
    };

    utteranceRef.current = utter;
    speechSynthesis.speak(utter);
  };

  const pauseResume = () => {
    if (!isPlaying || typeof window === 'undefined') return;
    if (!isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      speechSynthesis.resume();
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setCurrentTime(t => t + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (typeof window === 'undefined') return;
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 mb-6 border shadow-sm">
      <div className="flex items-center gap-3">
        {/* Play / Pause */}
        <button
          onClick={() => (!isPlaying ? play() : pauseResume())}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
          aria-label={isPlaying && !isPaused ? 'Pause' : 'Play'}
        >
          {isPlaying && !isPaused ? '❚❚' : '▶'}
        </button>

        {/* Progress */}
        <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded">
          <div
            className="h-full bg-blue-600 rounded transition-all"
            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>

        {/* Time */}
        <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[60px] text-right">
          {currentTime}s / {duration}s
        </span>

        {/* Stop */}
        <button
          onClick={stop}
          className="text-xs px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          aria-label="Stop"
        >
          Stop
        </button>
      </div>
    </div>
  );
}
