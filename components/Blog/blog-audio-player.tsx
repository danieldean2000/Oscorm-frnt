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
  const [voicesReady, setVoicesReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const textRef = useRef('');
  /* ---------------------------------------------
     Extract plain text from HTML
  ---------------------------------------------- */
  const extractText = (html: string) => {
    if (typeof document === 'undefined') return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelectorAll('script,style').forEach(e => e.remove());
    return div.textContent?.replace(/\s+/g, ' ').trim() || '';
  };
  /* ---------------------------------------------
     Load voices (ESLint safe)
  ---------------------------------------------- */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      console.log('Available voices:', voices.length, voices.map(v => v.name));
      if (voices.length) {
        setVoicesReady(true);
        setIsInitialized(true);
        setError(null);
      }
    };
    // Initial load
    loadVoices();
    
    // Listen for voice changes
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    // Fallback timeout in case voiceschanged doesn't fire
    const fallbackTimeout = setTimeout(() => {
      if (!voicesReady) {
        console.log('Voice loading timeout - forcing initialization');
        loadVoices();
        if (speechSynthesis.getVoices().length > 0) {
          setVoicesReady(true);
          setIsInitialized(true);
        } else {
          setError('No voices available. Please check your browser settings.');
        }
      }
    }, 3000);
    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      clearTimeout(fallbackTimeout);
    };
  }, []); // Remove voicesReady dependency to prevent infinite loop
  /* ---------------------------------------------
     Prepare text & duration
  ---------------------------------------------- */
  useEffect(() => {
    textRef.current = extractText(htmlContent);
    setDuration(Math.ceil(textRef.current.split(' ').length / 2.5));
    return () => {
      speechSynthesis.cancel();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [htmlContent]);
  /* ---------------------------------------------
     Timer helpers
  ---------------------------------------------- */
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentTime(t => t + 1);
    }, 1000);
  };
  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  /* ---------------------------------------------
     Play audio (🔥 SOUND FIX)
  ---------------------------------------------- */
  const play = async () => {
    // Prevent multiple simultaneous play attempts
    if (isProcessing) {
      console.log('Already processing, ignoring click');
      return;
    }
    try {
      setIsProcessing(true);
      setError(null);
      
      console.log('Play button clicked');
      console.log('Text to read:', textRef.current.substring(0, 100) + '...');
      console.log('Voices ready:', voicesReady);
      console.log('Is initialized:', isInitialized);
      
      if (!textRef.current.trim()) {
        setError('No text to read');
        setIsProcessing(false);
        return;
      }
      // Check if speech synthesis is supported
      if (!('speechSynthesis' in window)) {
        setError('Speech synthesis is not supported in your browser. Try Chrome or Edge.');
        setIsProcessing(false);
        return;
      }
      // Stop any current speech first
      speechSynthesis.cancel();
      
      // Small delay to ensure cancellation is complete
      await new Promise(resolve => setTimeout(resolve, 100));
      // Force voice reload if not ready
      let voices = speechSynthesis.getVoices();
      console.log('Current voices count:', voices.length);
      
      if (voices.length === 0) {
        console.log('No voices available, trying to reload...');
        // Try to force voice loading by triggering a dummy utterance
        const dummyUtterance = new SpeechSynthesisUtterance('');
        speechSynthesis.speak(dummyUtterance);
        speechSynthesis.cancel();
        
        // Wait and try again
        await new Promise(resolve => setTimeout(resolve, 500));
        voices = speechSynthesis.getVoices();
        
        if (voices.length === 0) {
          setError('No voices available. Please try refreshing the page or use a different browser (Chrome/Edge recommended).');
          setIsProcessing(false);
          return;
        }
      }
      // 🔊 Get the best available voice
      let selectedVoice = voices[0]; // fallback to first available voice
      
      // Try to find English voices first
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      if (englishVoices.length > 0) {
        // Prefer Google or Microsoft voices if available
        selectedVoice = englishVoices.find(v => v.name.includes('Google') || v.name.includes('Microsoft')) || englishVoices[0];
      }
      
      console.log('Selected voice:', selectedVoice.name, selectedVoice.lang);
      // Create new utterance with better error handling
      const utter = new SpeechSynthesisUtterance(textRef.current);
      
      utter.voice = selectedVoice;
      utter.lang = selectedVoice.lang || 'en-US';
      utter.volume = 1;
      utter.rate = 0.7; // Much slower for better comprehension
      utter.pitch = 1;
      utter.onstart = () => {
        console.log('Speech started');
        setIsPlaying(true);
        setIsPaused(false);
        setIsProcessing(false);
        startTimer();
      };
      utter.onend = () => {
        console.log('Speech ended');
        setIsProcessing(false);
        stop();
      };
      utter.onerror = (e) => {
        console.error('Speech error', e);
        setIsProcessing(false);
        // Don't show error for "interrupted" as it's usually normal
        if (e.error !== 'interrupted') {
          let errorMessage = `Speech error: ${e.error || 'Unknown error'}`;
          
          // Provide helpful suggestions based on error type
          if (e.error === 'network') {
            errorMessage += ' - Check your internet connection';
          } else if (e.error === 'synthesis-unavailable') {
            errorMessage += ' - Try refreshing the page or using Chrome/Edge browser';
          } else if (e.error === 'language-unavailable') {
            errorMessage += ' - Try selecting a different voice';
          }
          
          setError(errorMessage);
        }
        stop();
      };
      utteranceRef.current = utter;
      
      // Start speaking with user gesture compliance
      console.log('Starting speech synthesis...');
      
      // Ensure we're in a user interaction context
      try {
        speechSynthesis.speak(utter);
        
        // Fallback: if speech doesn't start within 2 seconds, show error
        setTimeout(() => {
          if (!isPlaying && isProcessing) {
            setIsProcessing(false);
            setError('Speech failed to start. Try clicking the play button again or refresh the page.');
          }
        }, 2000);
        
      } catch (speakError) {
        console.error('Speech speak error:', speakError);
        setIsProcessing(false);
        setError('Failed to start speech. Try refreshing the page and ensure you\'re using a supported browser.');
        stop();
      }
      
    } catch (err) {
      console.error('Play error:', err);
      setIsProcessing(false);
      setError(`Failed to start audio: ${err instanceof Error ? err.message : 'Unknown error'}`);
      stop();
    }
  };
  /* ---------------------------------------------
     Pause / Resume
  ---------------------------------------------- */
  const pauseResume = () => {
    if (!isPlaying || isProcessing) return;
    try {
      if (!isPaused) {
        speechSynthesis.pause();
        setIsPaused(true);
        stopTimer();
      } else {
        speechSynthesis.resume();
        setIsPaused(false);
        startTimer();
      }
    } catch (err) {
      console.error('Pause/Resume error:', err);
      setError('Failed to pause/resume audio');
    }
  };
  /* ---------------------------------------------
     Stop
  ---------------------------------------------- */
  const stop = () => {
    try {
      speechSynthesis.cancel();
      utteranceRef.current = null;
      setIsPlaying(false);
      setIsPaused(false);
      setIsProcessing(false);
      setCurrentTime(0);
      stopTimer();
    } catch (err) {
      console.error('Stop error:', err);
      // Don't show error for stop, just reset state
      utteranceRef.current = null;
      setIsPlaying(false);
      setIsPaused(false);
      setIsProcessing(false);
      setCurrentTime(0);
      stopTimer();
    }
  };
  /* ---------------------------------------------
     UI
  ---------------------------------------------- */
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6 border shadow-sm">
      <div className="space-y-3">
        {/* Error Display */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
          </div>
        )}
        {/* Status Indicator */}
        {!isInitialized && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span>Initializing voice system...</span>
          </div>
        )}
        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Play / Pause */}
          <button
            onClick={() => (!isPlaying ? play() : pauseResume())}
            disabled={!isInitialized || !voicesReady || isProcessing}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            title={
              isProcessing ? 'Processing...' : 
              !isInitialized ? 'Voice system loading...' : 
              voicesReady ? 'Play/Pause' : 
              'No voices available'
            }
          >
            {isProcessing ? '⏳' : (isPlaying && !isPaused ? '❚❚' : '▶')}
          </button>
          {/* Progress */}
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-linear"
              style={{
                width: `${duration ? Math.min((currentTime / duration) * 100, 100) : 0}%`
              }}
            />
          </div>
          {/* Time */}
          <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[80px] text-right font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          {/* Stop */}
          <button
            onClick={stop}
            disabled={!isPlaying}
            className="text-xs px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Stop
          </button>
        </div>
     
        </div>
    </div>
  );
  // Helper function to format time
  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
