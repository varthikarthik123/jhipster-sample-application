import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 7044,
  title: 'notwithstanding ha',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-02-12T22:42'),
};

export const sampleWithPartialData: IPost = {
  id: 29282,
  title: 'ouch',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-02-13T16:09'),
};

export const sampleWithFullData: IPost = {
  id: 29924,
  title: 'beside',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-02-13T01:10'),
};

export const sampleWithNewData: NewPost = {
  title: 'anenst meanwhile obscure',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-02-13T07:14'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
