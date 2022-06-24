import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './mongo.module'
import { MongooseModule } from '@nestjs/mongoose';
import { TokenMongoSchema } from './database/schemas/token.schema';
import { DatabasePostgreSqlModule } from './database/database.module';
import { UsersModule } from './routes/users/users.module';
import { GuardsModule } from './utils/guards/auth.module';



@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, DatabaseModule, DatabasePostgreSqlModule, GuardsModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule { }
