import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TokenMongoDocument } from './database/schemas/token.schema';

@Injectable()
export class AppService {
  
  async getHello() {
    return "Hola mundo!"
  }
  
}
