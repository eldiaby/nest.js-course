import { IsEmpty, MaxLength, MinLength } from "class-validator";

export class SignupDTO {
  @MinLength(2)
  @MaxLength(10)
    @IsEmpty()
  name: string;

  email: string;

  password: string;
}

export class SigninDTO {
  @MinLength(2)
  @MaxLength(10)
  @IsEmpty()

  email: string;

  password: string;
}

export class ArticleDTO {
  @MinLength(2)
  @MaxLength(100)
  title: string;

  @MinLength(10)
  content: string;

  coverImage: string;

  images: string[];

  likes: number;

  tags: string[];
}
