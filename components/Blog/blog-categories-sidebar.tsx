'use client';

import Link from 'next/link';
import { Category } from '@/lib/redux/blog';

interface BlogCategoriesSidebarProps {
  categories: Category[];
}

export default function BlogCategoriesSidebar({ categories }: BlogCategoriesSidebarProps) {
  // Use only real categories from API
  const allCategories = categories.map(c => c.name);

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Categories</h3>
      </div>
      {allCategories.length > 0 ? (
        <div className="space-y-2">
          {allCategories.map((category, index) => (
            <Link
              key={index}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors group"
            >
              <input
                type="checkbox"
                readOnly
                className="w-4 h-4 text-[#2563eb] border-gray-300 rounded focus:ring-[#2563eb] focus:ring-2 pointer-events-none"
              />
              <span className="text-sm text-muted-foreground flex-1 group-hover:text-[#2563eb] transition-colors">{category}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No categories available</p>
      )}
    </div>
  );
}

