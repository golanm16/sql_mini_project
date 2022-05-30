import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClubMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  customerId: number;

  @Column()
  points: number;

  @Column({ nullable: true })
  joinDate: Date;
}
