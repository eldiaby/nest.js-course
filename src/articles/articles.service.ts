// src/articles/article.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { TagService } from '../tags/tag.service';
import { UserService } from '../users/user.service';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    private tagService: TagService, // Inject TagService
    private userService: UserService, // Inject UserService
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find({ relations: ['tags', 'author'] });
  }

  async findOne(id: number): Promise<Article> {
    const article = await this.articleRepository.findOne({
      where: { id },
      relations: ['tags', 'author'],
    });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async create(
    title: string,
    slug: string,
    description: string,
    coverImage: string,
    images: string[],
    tags: number[],
    authorId: number
  ): Promise<Article> {
    const author = await this.userService.findOne(authorId);
    if (!author) {
      throw new NotFoundException('Author not found');
    }

    const tagsEntities = await Promise.all(tags.map(tagId => this.tagService.findOne(tagId)));
    const article = this.articleRepository.create({
      title,
      slug,
      description,
      coverImage,
      images,
      tags: tagsEntities,
      author,
    });

    return this.articleRepository.save(article);
  }

  async update(id: number, updateData: Partial<Article>): Promise<Article> {
    await this.articleRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.articleRepository.delete(id);
  }
}
