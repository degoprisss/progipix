import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { UsersService } from '../../routes/users/users.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private usersService: UsersService) { }  

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization.split('Bearer')[1]
    const token = await this.usersService.getToken(authorization)
    if (token.length === 0) {
      console.log('entro')
      return true
    } else {
      return false
    }
  }
}