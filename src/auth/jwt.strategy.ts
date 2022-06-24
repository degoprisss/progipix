import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { UsersGoodMetRepository } from 'src/database/repositories';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    
    constructor(private usersGoodMetRepository: UsersGoodMetRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        const user = await this.usersGoodMetRepository.getUserId(payload.sub)
        return user;
    }
}