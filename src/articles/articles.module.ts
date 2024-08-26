// src/articles/article.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Tag } from '../tags/tag.entity'; // Import the Tag entity
import { User } from '../users/user.entity'; // Import the User entity

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column()
  coverImage: string;

  @Column({ default: 0 })
  likes: number;

  @Column('simple-array')
  images: string[];

  @ManyToMany(() => Tag, tag => tag.articles)
  tags: Tag[];

  @ManyToOne(() => User, user => user.articles)
  @JoinColumn()
  author: User;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
