import {DefaultCrudRepository} from '@loopback/repository';
import {SuscribeCourse, SuscribeCourseRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SuscribeCourseRepository extends DefaultCrudRepository<
  SuscribeCourse,
  typeof SuscribeCourse.prototype.id,
  SuscribeCourseRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(SuscribeCourse, dataSource);
  }
}
