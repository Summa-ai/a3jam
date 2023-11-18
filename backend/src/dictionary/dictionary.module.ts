import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminDictionaryController } from './admin/admin.controller';
import { AdminDictionaryService } from './admin/admin.service';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';
import { Dictionary } from './entities/dictionary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dictionary])],
  controllers: [DictionaryController, AdminDictionaryController],
  providers: [DictionaryService, AdminDictionaryService],
})
export class DictionaryModule {}
