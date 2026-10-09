'use client';

import { CategoryNavigation } from '@/features/hobby/components/category-navigation';
import { LogoLink } from '@/features/hobby/components/logo-link';

export function TopBar() {
  return (
    <header className="border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:min-h-20 md:flex-row md:items-center md:justify-between lg:px-8">
        <LogoLink />
        <CategoryNavigation />
      </div>
    </header>
  );
}
