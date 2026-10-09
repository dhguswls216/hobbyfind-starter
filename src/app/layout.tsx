import type { Metadata } from 'next';

import { TopBar } from '@/features/hobby/components/top-bar';

import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'HobbyFind',
  description:
    '운동형, 지능형, 예술형 취미를 살펴보고 관심 있는 활동을 골라보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen bg-canvas font-sans text-ink">
            <TopBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
