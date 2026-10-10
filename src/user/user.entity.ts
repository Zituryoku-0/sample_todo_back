import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_info')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;
}
