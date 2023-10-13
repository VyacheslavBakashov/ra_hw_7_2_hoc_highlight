/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';

import './App.css';
import { List } from './components/List';
import { VideoTypes } from './types';

const App: FC = () => {
  const [list, setList] = useState<VideoTypes[]>([
    {
      id: 1,
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
    },
    {
      id: 2,
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
    },
    {
      id: 3,
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      id: 4,
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      id: 5,
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      id: 6,
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return <List list={list} />;
};

export default App;
