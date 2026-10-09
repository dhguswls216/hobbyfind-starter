'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';

import { CategoryIntro } from '@/features/hobby/components/category-intro';
import { HobbyGrid } from '@/features/hobby/components/hobby-grid';
import { categoryByKey } from '@/features/hobby/constants/categories';
import {
  getHobbiesByCategory,
  isCategoryKey,
} from '@/features/hobby/lib/hobbies';

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params);

  if (!isCategoryKey(category)) {
    notFound();
  }

  const categoryInfo = categoryByKey[category];
  const hobbies = getHobbiesByCategory(category);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <CategoryIntro
        title={categoryInfo.name}
        description={categoryInfo.description}
      />
      <HobbyGrid hobbies={hobbies} />
    </main>
  );
}
