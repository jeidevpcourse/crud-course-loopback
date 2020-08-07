import {Entity, model, property} from '@loopback/repository';

@model()
export class SuscribeCourse extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  idSuscribe: number;

  @property({
    type: 'number',
    required: true,
  })
  idCourse: number;

  @property({
    type: 'date',
    default: new Date(),
  })
  created?: string;


  constructor(data?: Partial<SuscribeCourse>) {
    super(data);
  }
}

export interface SuscribeCourseRelations {
  // describe navigational properties here
}

export type SuscribeCourseWithRelations = SuscribeCourse & SuscribeCourseRelations;
