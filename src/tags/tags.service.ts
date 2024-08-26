// src/tags/tag.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  findOne(id: number): Promise<Tag> {
    return this.tagRepository.findOneBy({ id });
  }

  create(name: string): Promise<Tag> {
    const tag = this.tagRepository.create({ name });
    return this.tagRepository.save(tag);
  }

  async remove(id: number): Promise<void> {
    await this.tagRepository.delete(id);
  }
}
