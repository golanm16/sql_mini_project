import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activityId: number;

  @Column()
  customerId: number;

  @Column()
  canceled: boolean;
}
