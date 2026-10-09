import type { CategoryInfo, CategoryKey } from '@/features/hobby/lib/types';

export const CATEGORIES = [
  {
    key: 'physical',
    name: '운동형',
    description: '몸을 움직이며 즐길 수 있는 취미를 만나보세요.',
  },
  {
    key: 'intellectual',
    name: '지능형',
    description: '생각하고 배우는 즐거움을 주는 취미를 만나보세요.',
  },
  {
    key: 'artistic',
    name: '예술형',
    description: '만들고 표현하는 즐거움을 주는 취미를 만나보세요.',
  },
] as const satisfies readonly CategoryInfo[];

export const categoryByKey: Record<CategoryKey, CategoryInfo> = {
  physical: CATEGORIES[0],
  intellectual: CATEGORIES[1],
  artistic: CATEGORIES[2],
};
