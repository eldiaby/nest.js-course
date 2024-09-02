import { HttpStatus, Injectable } from '@nestjs/common';
import { SignupDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(body: SignupDTO) {
    let user = await this.userModel.findOne({ email: body.email });
    if (user)
      throw new HttpException('email already exists', HttpStatus.CONFLICT);
    const hash = await bcrypt.hash(body.password, 8);
    body.password = hash;

   let addedUser =  await this.userModel.create(body);
    return {message:"success" , addedUser};
  }
}
