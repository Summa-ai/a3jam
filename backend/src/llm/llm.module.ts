import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictionary } from '../dictionary/entities/dictionary.entity';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dictionary])],
  controllers: [LlmController],
  providers: [LlmService],
})
export class LlmModule {}
