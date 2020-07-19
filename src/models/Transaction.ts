import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  type: 'income' | 'outcome';

  @Column('numeric')
  value: number;

  @Column('varchar')
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
