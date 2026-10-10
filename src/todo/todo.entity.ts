import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class Todo {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}
