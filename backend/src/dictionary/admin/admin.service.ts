import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Dictionary } from '../entities/dictionary.entity';

@Injectable()
export class AdminDictionaryService extends TypeOrmCrudService<Dictionary> {
  constructor(@InjectRepository(Dictionary) repo) {
    super(repo);
  }
}
