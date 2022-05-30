import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fName: string;

  @Column()
  lName: string;

  @Column()
  rating: number;

  @Column()
  salary: number;
}
