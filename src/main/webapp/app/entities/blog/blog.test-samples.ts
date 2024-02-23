import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 2701,
  name: 'afraid of promenade',
  handle: 'ouch',
};

export const sampleWithPartialData: IBlog = {
  id: 20103,
  name: 'worth gah extension',
  handle: 'rudely reluctantly meh',
};

export const sampleWithFullData: IBlog = {
  id: 13080,
  name: 'preen',
  handle: 'consequently',
};

export const sampleWithNewData: NewBlog = {
  name: 'seldom ascot',
  handle: 'ah',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
