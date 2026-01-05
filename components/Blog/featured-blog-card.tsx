import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/redux/blog';

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
        <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#2563eb" className="rotate-[-45deg]">
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h2.6v-6H19v-2l-2-2z" />
          </svg>
        </div>
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#2563eb] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm font-semibold text-[#2563eb] group-hover:text-[#1d4ed8] transition-colors">
            Learn more →
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    </Link>
  );
}

