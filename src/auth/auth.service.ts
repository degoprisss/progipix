import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/routes/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getUser(username);
        console.log(user)
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.userId };
        return {
            access_token: await this.jwtService.sign(payload),
        };
    }

}
