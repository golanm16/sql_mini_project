import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: '' })
  category?: string;

  @Column()
  season: string;

  @Column()
  title: string;
}
