import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';
  import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [
  AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    // PostsModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
