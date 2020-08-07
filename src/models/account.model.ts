import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        },
      },
      uniqueUserName: {
        keys: {
          userName: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class Account extends Entity {
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
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
  })
  idPicture?: number;

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
    type: 'string',
    required: true,
  })
  userName: string;


  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
