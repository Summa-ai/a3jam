import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IDictionaryResponse } from '../types/dictionary';

@Entity()
export class Dictionary {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  word: string;
  @Column({ type: 'json', nullable: true })
  dictionary: IDictionaryResponse;
}
