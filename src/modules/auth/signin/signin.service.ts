import { Injectable } from '@nestjs/common';
import { SigninDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private _jwtService: JwtService,
  ) {}

  async signin(body: SigninDTO) {
    let user = await this.userModel.findOne({ email: body.email });
      if (user && (await bcrypt.compare(body.password, user.password))) {
        let token = this._jwtService.sign({name:user.name , email:user.emails} , {secret:""})
      return { message: 'welcome', token: token };
    } else {
      throw new HttpException(
        'email or password wrong',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
