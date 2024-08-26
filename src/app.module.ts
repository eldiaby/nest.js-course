// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './articles/article.module';
import { TagModule } from './tags/tag.module';
import { UserModule } from './users/user.module'; // Import UserModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.db',
      entities: [Article, Tag, User],
      synchronize: true,
    }),
    ArticleModule,
    TagModule,
    UserModule, // Add UserModule
  ],
})
export class AppModule {}
