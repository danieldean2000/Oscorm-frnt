import Image from 'next/image';
import { BlogPost } from '@/lib/redux/blog';

interface BlogDetailsHeroProps {
  post: BlogPost;
}

export default function BlogDetailsHero({ post }: BlogDetailsHeroProps) {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mt-20">
      <div className="absolute inset-0 z-0 bg-gray-800">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/60 via-[#1e40af]/60 to-[#2563eb]/60"></div>
      </div>
    </section>
  );
}

