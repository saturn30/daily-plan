import { type getTheme } from '@/common/styles';
import '@emotion/react';

type A = ReturnType<getTheme>;

declare module '@emotion/react' {
  export interface Theme extends ReturnType<typeof getTheme> {}
}
