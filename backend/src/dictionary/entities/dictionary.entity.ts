import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IDictionaryResponse } from '../types/dictionary';

@Entity()
export class Dictionary {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'text', nullable: false })
  word: string;
  @Column({ type: 'json', nullable: true })
  dictionary: IDictionaryResponse;
}
