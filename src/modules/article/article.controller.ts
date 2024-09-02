import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  ValidationPipe,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDTO } from '../../modules/auth/dto/auth.dto';
import { AuthGuard } from './../../core/guards/auth.guard';

@Controller('article')
@UseGuards(AuthGuard)
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}

  @Get()
  getAllArticles() {
    return this._articleService.getAllArticles();
  }

  @Get(':id')
  getArticleById(@Param('id', ParseIntPipe) id: number) {
    return this._articleService.getArticleById(id);
  }

  @Post()
  addArticle(
    @Body(new ValidationPipe()) articleDto: ArticleDTO & { createdBy: string },
  ) {
    
    return this._articleService.addArticle(articleDto);
  }

  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return this._articleService.deleteArticle(id);
  }

  @Put(':id')
  updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe())
    articleDto: ArticleDTO & {
      author: string;
      slug: string;
      description: string;
      createdBy: string;
    },
  ) {
    return this._articleService.updateArticle(id, articleDto);
  }
}
