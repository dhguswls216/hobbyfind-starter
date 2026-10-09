'use client';

import { Hero } from '@/features/hobby/components/hero';
import { HobbyGrid } from '@/features/hobby/components/hobby-grid';
import { HOBBIES } from '@/features/hobby/constants/hobbies';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <HobbyGrid hobbies={HOBBIES} />
    </main>
  );
}
