import type { Hobby } from '@/features/hobby/lib/types';

/** 루트 표시 순서는 운동형, 지능형, 예술형이며 각 카테고리 내부 순서도 고정이다. */
export const HOBBIES = [
  { id: 'physical-jogging', name: '조깅/러닝', category: 'physical' },
  { id: 'physical-yoga', name: '요가', category: 'physical' },
  { id: 'physical-swimming', name: '수영', category: 'physical' },
  { id: 'physical-cycling', name: '자전거', category: 'physical' },
  { id: 'physical-climbing', name: '클라이밍', category: 'physical' },
  { id: 'physical-dance', name: '댄스', category: 'physical' },
  { id: 'intellectual-reading', name: '독서', category: 'intellectual' },
  { id: 'intellectual-puzzle', name: '퍼즐', category: 'intellectual' },
  { id: 'intellectual-chess', name: '체스', category: 'intellectual' },
  {
    id: 'intellectual-programming',
    name: '프로그래밍',
    category: 'intellectual',
  },
  {
    id: 'intellectual-language',
    name: '외국어 학습',
    category: 'intellectual',
  },
  {
    id: 'intellectual-photography',
    name: '사진 촬영',
    category: 'intellectual',
  },
  { id: 'artistic-drawing', name: '그림 그리기', category: 'artistic' },
  { id: 'artistic-instrument', name: '악기 연주', category: 'artistic' },
  { id: 'artistic-cooking', name: '요리', category: 'artistic' },
  { id: 'artistic-calligraphy', name: '서예', category: 'artistic' },
  { id: 'artistic-pottery', name: '도자기 만들기', category: 'artistic' },
  { id: 'artistic-gardening', name: '정원 가꾸기', category: 'artistic' },
] as const satisfies readonly Hobby[];
