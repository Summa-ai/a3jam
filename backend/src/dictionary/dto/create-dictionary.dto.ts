import { IsObject, IsString } from 'class-validator';

export class CreateDictionaryDto {
  @IsString()
  word: string;
}

export class CreateEntryDto {
  @IsObject()
  entry: JSON;
}
