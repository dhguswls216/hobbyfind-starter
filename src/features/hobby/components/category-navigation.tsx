'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CATEGORIES } from '@/features/hobby/constants/categories';
import { cn } from '@/lib/utils';

export function CategoryNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="취미 카테고리" className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => {
        const href = `/category/${category.key}`;
        const active = pathname === href;

        return (
          <Link
            key={category.key}
            href={href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus',
              active &&
                'border-brand-strong bg-accent font-semibold text-brand-strong',
              !active &&
                'border-line bg-surface text-ink hover:border-line-strong hover:bg-surface-muted',
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}
