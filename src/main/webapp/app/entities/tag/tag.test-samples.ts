import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 3560,
  name: 'while',
};

export const sampleWithPartialData: ITag = {
  id: 28643,
  name: 'adventurously',
};

export const sampleWithFullData: ITag = {
  id: 31782,
  name: 'concerning kindheartedly whether',
};

export const sampleWithNewData: NewTag = {
  name: 'frankly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
