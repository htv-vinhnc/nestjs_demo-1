import { BaseEntity, DeleteResult, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { IBaseService } from './i.base.service';

export class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }
  findById(id: EntityId, options?: FindOneOptions<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findByIds(id: [EntityId], options?: FindManyOptions<T>): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  update(id: EntityId, data: any): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async index(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }



  // eslint-disable-next-line
  async store(data: any): Promise<T> {
    return await this.repository.save(data);
  }

  // eslint-disable-next-line
  

  async delete(id: EntityId): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}

