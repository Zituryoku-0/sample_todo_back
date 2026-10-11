import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo_info')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}
