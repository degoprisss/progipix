import { Body, Controller, Get, Headers, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Get()
  getHello() {
    return this.appService.getHello()
  }

}
