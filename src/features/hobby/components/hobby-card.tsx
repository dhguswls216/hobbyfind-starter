'use client';

import { categoryByKey } from '@/features/hobby/constants/categories';
import type { Hobby } from '@/features/hobby/lib/types';

type HobbyCardProps = {
  hobby: Hobby;
};

export function HobbyCard({ hobby }: HobbyCardProps) {
  const categoryName = categoryByKey[hobby.category].name;

  return (
    <li className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={hobby.imageSrc}
          alt={hobby.imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-h-32 p-6">
        <p className="text-sm font-medium text-secondary">{categoryName}</p>
        <h2 className="mt-2 break-words text-lg font-semibold text-ink">
          {hobby.name}
        </h2>
      </div>
    </li>
  );
}
