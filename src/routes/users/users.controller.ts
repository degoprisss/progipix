import { Body, Controller, Get, Header, Headers, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/utils/guards/local-auth.guard';
import { UsersService } from './users.service';
import { AuthGuard } from '../../utils/guards/auth.guard'
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { LoginDto } from 'src/utils/dto/login.dto';
import { UserDto } from 'src/utils/dto/users.dto';

@Controller('api/v1/progipix/users')
export class UsersController {

    constructor(private usersService: UsersService, private authService: AuthService) { }


    @Post('create/bidding')
    async createBidding(@Body() bidding) {
        console.log(bidding)
        return await this.usersService.createBidding(bidding)
    }

    @Post('create/cars')
    async createCars(@Body() cars) {
        return await this.usersService.createCars(cars)
    }

    @Post('register')
    async createUser(@Body() user: UserDto) {
        return await this.usersService.createUser(user)
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body() user: LoginDto, @Request() req) {
        return await this.authService.login(req.user);
    }

    
    @Get('cars')
    async getCars() {
        return this.usersService.getCars()
    }

    @Get('cars/:id')
    @ApiParam({ description: 'Id del carro a licitar', name: 'id', type: 'string' })
    async getCarsId(@Param('id') id: string) {
        return this.usersService.getCarsId(id)
    }

    @Get('biddings/:id')
    @ApiParam({ description: 'Id del carro a licitar', name: 'id', type: 'string' })
    async getBiddings(@Param('id') id: string) {
        return this.usersService.getBiddingId(id)
    }

    @Get('auth/logout')
    async logout(@Headers() headers) {
        return this.usersService.saveToken(headers.authorization)
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UseGuards(AuthGuard)
    @Get('user/information')
    getProfile(@Request() req) {
        return req.user;
    }

}
