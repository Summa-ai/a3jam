import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { Dictionary } from './entities/dictionary.entity';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly dictionary: Repository<Dictionary>,
    private eventEmitter: EventEmitter2,
  ) {}
  async create(createDictionaryDto: CreateDictionaryDto) {
    const results = await this.dictionary.save(createDictionaryDto);

    this.eventEmitter.emit('order.created', {
      id: results.id,
      word: results.word,
    });

    return 'ok';
  }

  // findAll() {
  //   return `This action returns all dictionary`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} dictionary`;
  // }

  // update(id: number, updateDictionaryDto: UpdateDictionaryDto) {
  //   return `This action updates a #${id} dictionary`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dictionary`;
  // }
}
