import Link from 'next/link';

export default function BackToBlog() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors group"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:-translate-x-1 transition-transform">
            <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to All Articles
        </Link>
      </div>
    </section>
  );
}

