import {Entity, model, property} from '@loopback/repository';

@model()
export class Picture extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  srcPicture: string;

  @property({
    type: 'string',
    required: true,
  })
  reference: string;

  @property({
    type: 'number',
    required: true,
  })
  idReference: number;

  @property({
    type: 'date',
    default: new Date(),
  })
  created?: string;


  constructor(data?: Partial<Picture>) {
    super(data);
  }
}

export interface PictureRelations {
  // describe navigational properties here
}

export type PictureWithRelations = Picture & PictureRelations;
