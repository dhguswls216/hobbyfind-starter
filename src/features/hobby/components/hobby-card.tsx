'use client';

import { categoryByKey } from '@/features/hobby/constants/categories';
import type { Hobby } from '@/features/hobby/lib/types';

type HobbyCardProps = {
  hobby: Hobby;
};

export function HobbyCard({ hobby }: HobbyCardProps) {
  const categoryName = categoryByKey[hobby.category].name;

  return (
    <li className="min-h-32 rounded-2xl border border-line bg-surface p-6">
      <p className="text-sm font-medium text-secondary">{categoryName}</p>
      <h2 className="mt-2 break-words text-lg font-semibold text-ink">
        {hobby.name}
      </h2>
    </li>
  );
}
