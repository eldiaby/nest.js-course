import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {User} from "./user.schema"
import { SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;  

  @Prop({ required: true })
  info: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}
export const PostSchema = SchemaFactory.createForClass(Post)