import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import {PostsService} from "../posts/posts.service"
@Controller('posts')
export class PostsController {
    constructor(private _postsService: PostsService) {
        
    }
  @Get()
  getPosts() {
      return this._postsService.getPosts(); 
  }
}
