import { HOBBIES } from '@/features/hobby/constants/hobbies';
import {
  CATEGORY_KEYS,
  type CategoryKey,
  type Hobby,
} from '@/features/hobby/lib/types';

export function isCategoryKey(value: string): value is CategoryKey {
  return CATEGORY_KEYS.some((key) => key === value);
}

export function getHobbiesByCategory(category: CategoryKey): readonly Hobby[] {
  return HOBBIES.filter((hobby) => hobby.category === category);
}
