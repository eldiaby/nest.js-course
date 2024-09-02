import { Controller, Post, Body } from '@nestjs/common';
import { SigninService } from "./signin.service";
import { SigninDTO } from '../dto/auth.dto';

@Controller('signin')
export class SigninController {
    constructor(private readonly _signinService: SigninService) {
        
    }
    @Post()
    async signin(@Body() body: SigninDTO) {
        return this._signinService.signin(body);
    }
}
