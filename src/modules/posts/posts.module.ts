import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from 'src/core/schemas/posts.schema';
import {Post} from "../../core/schemas/posts.schema"

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }], 'posts')],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
