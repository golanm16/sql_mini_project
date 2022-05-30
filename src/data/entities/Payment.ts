import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  amount: number;

  @Column()
  dutyDate: Date;

  @Column()
  paymentDate: Date;
}
