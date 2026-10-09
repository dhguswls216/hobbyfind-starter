export const CATEGORY_KEYS = ['physical', 'intellectual', 'artistic'] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

export type Hobby = {
  id: string;
  name: string;
  category: CategoryKey;
};

export type CategoryInfo = {
  key: CategoryKey;
  name: string;
  description: string;
};
