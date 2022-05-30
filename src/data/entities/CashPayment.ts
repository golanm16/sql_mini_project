import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CashPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentId: number;
}
