import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TokenMongoSchema } from 'src/database/schemas/token.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../../auth/auth.module';
import { BiddingRepository, UsersGoodMetRepository, CarsRepository } from '../../database/repositories/index';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([UsersGoodMetRepository, BiddingRepository, CarsRepository]), AuthModule, MongooseModule.forFeature([{ name: "TokenMongo", schema: TokenMongoSchema }])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }
