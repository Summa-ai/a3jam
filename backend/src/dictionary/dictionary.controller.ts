import { Body, Controller, Post } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import {
  CreateDictionaryDto,
  CreateEntryDto,
} from './dto/create-dictionary.dto';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Post()
  create(@Body() createDictionaryDto: CreateDictionaryDto) {
    return this.dictionaryService.create(createDictionaryDto);
  }

  @Post('entry')
  createEntry(@Body() createEntryDto: CreateEntryDto) {
    return this.dictionaryService.createEntry(createEntryDto);
  }
}
