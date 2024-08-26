// src/tags/tag.controller.ts
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { TagService } from '../tags/tags.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tagService.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.tagService.create(body.name);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tagService.remove(id);
  }
}
