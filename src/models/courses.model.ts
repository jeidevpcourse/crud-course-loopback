import {Entity, model, property} from '@loopback/repository';

@model()
export class Courses extends Entity {
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
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  srcVideo: string;

  @property({
    type: 'number',
    required: true,
  })
  idOwner: number;

  @property({
    type: 'number',
    default: 0,
  })
  view?: number;

  @property({
    type: 'date',
    default: new Date(),
  })
  created?: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  update?: string;

  @property({
    type: 'number',
  })
  idMiniature?: number;


  constructor(data?: Partial<Courses>) {
    super(data);
  }
}

export interface CoursesRelations {
  // describe navigational properties here
}

export type CoursesWithRelations = Courses & CoursesRelations;
