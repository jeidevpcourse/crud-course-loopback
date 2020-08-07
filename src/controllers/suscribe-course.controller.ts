import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {SuscribeCourse} from '../models';
import {SuscribeCourseRepository} from '../repositories';

export class SuscribeCourseController {
  constructor(
    @repository(SuscribeCourseRepository)
    public suscribeCourseRepository : SuscribeCourseRepository,
  ) {}

  @post('/suscribe-courses', {
    responses: {
      '200': {
        description: 'SuscribeCourse model instance',
        content: {'application/json': {schema: getModelSchemaRef(SuscribeCourse)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SuscribeCourse, {
            title: 'NewSuscribeCourse',
            exclude: ['id'],
          }),
        },
      },
    })
    suscribeCourse: Omit<SuscribeCourse, 'id'>,
  ): Promise<SuscribeCourse> {
    return this.suscribeCourseRepository.create(suscribeCourse);
  }

  @get('/suscribe-courses/count', {
    responses: {
      '200': {
        description: 'SuscribeCourse model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SuscribeCourse) where?: Where<SuscribeCourse>,
  ): Promise<Count> {
    return this.suscribeCourseRepository.count(where);
  }

  @get('/suscribe-courses', {
    responses: {
      '200': {
        description: 'Array of SuscribeCourse model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SuscribeCourse, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SuscribeCourse) filter?: Filter<SuscribeCourse>,
  ): Promise<SuscribeCourse[]> {
    return this.suscribeCourseRepository.find(filter);
  }

  @patch('/suscribe-courses', {
    responses: {
      '200': {
        description: 'SuscribeCourse PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SuscribeCourse, {partial: true}),
        },
      },
    })
    suscribeCourse: SuscribeCourse,
    @param.where(SuscribeCourse) where?: Where<SuscribeCourse>,
  ): Promise<Count> {
    return this.suscribeCourseRepository.updateAll(suscribeCourse, where);
  }

  @get('/suscribe-courses/{id}', {
    responses: {
      '200': {
        description: 'SuscribeCourse model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SuscribeCourse, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SuscribeCourse, {exclude: 'where'}) filter?: FilterExcludingWhere<SuscribeCourse>
  ): Promise<SuscribeCourse> {
    return this.suscribeCourseRepository.findById(id, filter);
  }

  @patch('/suscribe-courses/{id}', {
    responses: {
      '204': {
        description: 'SuscribeCourse PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SuscribeCourse, {partial: true}),
        },
      },
    })
    suscribeCourse: SuscribeCourse,
  ): Promise<void> {
    await this.suscribeCourseRepository.updateById(id, suscribeCourse);
  }

  @put('/suscribe-courses/{id}', {
    responses: {
      '204': {
        description: 'SuscribeCourse PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() suscribeCourse: SuscribeCourse,
  ): Promise<void> {
    await this.suscribeCourseRepository.replaceById(id, suscribeCourse);
  }

  @del('/suscribe-courses/{id}', {
    responses: {
      '204': {
        description: 'SuscribeCourse DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.suscribeCourseRepository.deleteById(id);
  }
}
