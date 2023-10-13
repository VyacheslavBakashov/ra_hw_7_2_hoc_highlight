import { Key } from 'react';

export type VideoTypes = {
  id?: Key;
  type: string;
  url?: string;
  title?: string;
  views: number;
};
