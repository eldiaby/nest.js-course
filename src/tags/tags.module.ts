// src/tags/tag.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Article } from '../articles/articles.module';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Article, article => article.tags)
  @JoinTable()
  articles: Article[];
}
