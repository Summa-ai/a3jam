import { HttpModule } from '@nestjs/axios';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminDictionaryController } from './admin/admin.controller';
import { AdminDictionaryService } from './admin/admin.service';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';
import { Dictionary } from './entities/dictionary.entity';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'dictionary',
    }),
    TypeOrmModule.forFeature([Dictionary]),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: 'https://siwar.ksaa.gov.sa/api/alriyadh',
        headers: {
          apikey: configService.get('siwar.api_key'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [DictionaryController, AdminDictionaryController],
  providers: [DictionaryService, AdminDictionaryService],
})
export class DictionaryModule {}
