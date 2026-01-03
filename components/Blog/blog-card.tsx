import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/redux/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-200">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3 w-fit">
          {post.category}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 line-clamp-2 flex-grow group-hover:text-[#2563eb] transition-colors">
          {post.title}
        </h3>
        <div className="flex justify-between items-center pt-3 border-t border-border">
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

