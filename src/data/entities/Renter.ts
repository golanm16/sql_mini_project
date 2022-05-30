import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Renter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  villaId: number;

  @Column()
  startDate: Date;

  @Column()
  finalDate: Date;
}
