'use client';

interface CategoryTabsProps {
  categories: string[];
  activeTab: string;
  onTabChange: (category: string) => void;
}

export default function CategoryTabs({ categories, activeTab, onTabChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 mb-8 sm:mb-10 border-b-2 border-border pb-0 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onTabChange(category)}
          className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300 relative border-b-3 border-transparent mb-[-2px] cursor-pointer ${
            activeTab === category
              ? 'text-[#2563eb] border-[#2563eb]'
              : 'text-muted-foreground hover:text-[#2563eb]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

