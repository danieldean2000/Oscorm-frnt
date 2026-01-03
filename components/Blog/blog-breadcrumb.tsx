import Link from 'next/link';
import { BlogPost } from '@/lib/redux/blog';

interface BlogBreadcrumbProps {
  post: BlogPost;
}

export default function BlogBreadcrumb({ post }: BlogBreadcrumbProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 py-2.5 sm:py-3 md:py-4 mt-[80px] sm:mt-20 md:mt-20 w-full relative z-40 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <nav 
          className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 text-[10px] sm:text-xs md:text-sm flex-nowrap overflow-hidden w-full" 
          aria-label="Breadcrumb"
        >
          <Link 
            href="/" 
            className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Home
          </Link>
          <span className="text-gray-500 dark:text-gray-400 flex-shrink-0 text-[10px] sm:text-xs">&gt;</span>
          <Link 
            href="/blog" 
            className="font-medium text-gray-800 dark:text-gray-200 hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Blog
          </Link>
          <span className="text-gray-500 dark:text-gray-400 flex-shrink-0 text-[10px] sm:text-xs">&gt;</span>
          <span className="text-gray-700 dark:text-gray-300 font-medium truncate min-w-0 max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-none">
            {post.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400 flex-shrink-0 text-[10px] sm:text-xs">&gt;</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold truncate min-w-0 max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-none">
            {post.title}
          </span>
        </nav>
      </div>
    </div>
  );
}

