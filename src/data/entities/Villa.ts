import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Villa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numOfRooms: number;

  @Column()
  pricePerNight: number;
}
