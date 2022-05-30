import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreditPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numberOfPayments: number;

  @Column()
  paymentId: number;
}
