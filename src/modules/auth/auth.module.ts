import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SigninController } from './signin/signin.controller';
import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
  import { ArticleController } from './../article/article.controller';
import { Article, ArticleSchema } from '../../core/schemas/article.schema';
  import { ArticleService } from './../article/article.service';

@Module({
  imports: [
MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [SigninController, SignupController, ArticleController],
  providers: [SigninService, SignupService, JwtService, ArticleService],
})
export class AuthModule {}
