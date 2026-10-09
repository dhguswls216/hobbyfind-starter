'use client';

import { HobbyCard } from '@/features/hobby/components/hobby-card';
import type { Hobby } from '@/features/hobby/lib/types';

type HobbyGridProps = {
  hobbies: readonly Hobby[];
};

export function HobbyGrid({ hobbies }: HobbyGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:pb-16">
      {hobbies.map((hobby) => (
        <HobbyCard key={hobby.id} hobby={hobby} />
      ))}
    </ul>
  );
}
