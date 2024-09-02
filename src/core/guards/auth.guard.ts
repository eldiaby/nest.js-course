import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _jwtService: JwtService) {
    
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let req = context.switchToHttp().getRequest();
   
    let { token } = req.headers;
    let decoded = this._jwtService.verify(token, { secret: "" })
    
    if (decoded) {
      req['userId']
      return true;
    } else {
          return false;

    }
    }
  }


