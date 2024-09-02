import { Injectable } from '@nestjs/common';
import { ArticleDTO } from '../../modules/auth/dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../../core/schemas/article.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  articles = [
    
  ];

  constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}

  getAllArticles() {
    return this.articles;
  }

  getArticleById(id: number) {
    const article = this.articles.find((ele) => ele.id === id);
    if (article) {
      return { id: article.id, title: article.title, content: article.content, author: article.author, coverImage: article.coverImage, images: article.images, likes: article.likes, tags: article.tags, slug: article.slug, description: article.description, createdBy: article.createdBy };
    } else {
      return { message: 'Article not found' };
    }
  }

  addArticle(body: ArticleDTO) {
    this.articles.push(body);
    return { message: 'added', articles: this.articles };
  }

  deleteArticle(id: number) {
    const article = this.articles.findIndex((ele) => ele.id === id);
    const deletedArticle = this.articles.splice(article, 1);
    return { message: 'deleted', article: deletedArticle };
  }

  updateArticle(id: number, updatedArticle: { title: string; content: string; author: string; coverImage: string; images: string[]; likes: number; tags: string[]; slug: string; description: string; createdBy: string }) {
    const article = this.articles.findIndex((ele) => ele.id === id);
    this.articles[article].title = updatedArticle.title;
    this.articles[article].content = updatedArticle.content;
    this.articles[article].author = updatedArticle.author;
    this.articles[article].coverImage = updatedArticle.coverImage;
    this.articles[article].images = updatedArticle.images;
    this.articles[article].likes = updatedArticle.likes;
    this.articles[article].tags = updatedArticle.tags;
    this.articles[article].slug = updatedArticle.slug;
    this.articles[article].description = updatedArticle.description;
    this.articles[article].createdBy = updatedArticle.createdBy;
    return { message: 'updated', article: this.articles[article] };
  }
}
