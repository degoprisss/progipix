import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { GuardsModule } from 'src/utils/guards/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersGoodMetRepository, BiddingRepository, CarsRepository } from 'src/database/repositories';
import { UsersService } from 'src/routes/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenMongoSchema } from 'src/database/schemas/token.schema';


@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([UsersGoodMetRepository, BiddingRepository, CarsRepository ]),
    MongooseModule.forFeature([{ name: "TokenMongo", schema: TokenMongoSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20h' },
    }),
    GuardsModule,],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
  exports: [AuthService],
})
export class AuthModule { }
