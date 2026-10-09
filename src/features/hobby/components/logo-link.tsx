'use client';

import Link from 'next/link';

export function LogoLink() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center text-lg font-bold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
    >
      HobbyFind
    </Link>
  );
}
