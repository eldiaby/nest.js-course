// src/articles/article.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Post()
  create(@Body() body: {
    title: string;
    slug: string;
    description: string;
    coverImage: string;
    images: string[];
    tags: number[];
    authorId: number;
  }) {
    return this.articleService.create(
      body.title,
      body.slug,
      body.description,
      body.coverImage,
      body.images,
      body.tags,
      body.authorId
    );
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Article>) {
    return this.articleService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articleService.remove(id);
  }
}
