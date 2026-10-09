'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { HOME_CONTENT } from '@/features/hobby/constants/home';

const HERO_FADE_DURATION_SECONDS = 0.6;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="py-10 lg:py-16"
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0 : HERO_FADE_DURATION_SECONDS,
        ease: 'easeOut',
      }}
    >
      <h1 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
        {HOME_CONTENT.title}
      </h1>
      <p className="mt-4 max-w-[640px] text-base leading-7 text-muted">
        {HOME_CONTENT.description}
      </p>
    </motion.section>
  );
}
