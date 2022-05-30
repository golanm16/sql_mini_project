import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActivityConductor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  workerId: number;

  @Column()
  activityId: number;
}
