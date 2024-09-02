import { Controller, Post, Body } from '@nestjs/common';
import { SignupService } from "./signup.service";
import { SignupDTO } from '../dto/auth.dto';
@Controller('signup')
export class SignupController {
    constructor(private readonly _signupService: SignupService) {
        
    }
    @Post()
    async signUp(@Body() body: SignupDTO) {
        return this._signupService.signUp(body);
    }
}
