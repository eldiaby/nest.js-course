import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Article extends Document {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  coverImage: string;

  @Prop()
  images: string[];

  @Prop()
  likes: number;

  @Prop()
  tags: string[];

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  description: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
