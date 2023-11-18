import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateLlmDto } from './dto/create-llm.dto';
import { UpdateLlmDto } from './dto/update-llm.dto';
import { LlmService } from './llm.service';

@Controller('llm')
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Post()
  create(@Body() createLlmDto: CreateLlmDto) {
    return this.llmService.create(createLlmDto);
  }

  // @Post('test')
  // test(@Body('word') body: string) {
  //   return this.llmService.llm(body);
  // }

  @Get()
  findAll() {
    return this.llmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.llmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLlmDto: UpdateLlmDto) {
    return this.llmService.update(+id, updateLlmDto);
  }
}
