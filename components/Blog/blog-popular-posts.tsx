import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/redux/blog';

interface BlogPopularPostsProps {
  posts: BlogPost[];
}

export default function BlogPopularPosts({ posts }: BlogPopularPostsProps) {
  // Get popular posts (last 3 posts, most recent first)
  const popularPosts = posts.slice(-3).reverse().slice(0, 3);

  if (popularPosts.length === 0) return null;

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h3 className="text-lg font-bold text-foreground mb-4">Popular Posts</h3>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="flex gap-3 group hover:opacity-80 transition-opacity"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-[#2563eb] transition-colors">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

