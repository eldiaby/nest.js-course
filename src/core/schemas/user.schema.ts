import { Schema ,Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true})
  name: string;

  @Prop({ required: true, unique: true })
    emails: string;
    
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
