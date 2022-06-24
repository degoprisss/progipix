import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BiddingRepository } from 'src/database/repositories';
import { CarsRepository } from 'src/database/repositories/cars/cars.repository';
import { UsersGoodMetRepository } from 'src/database/repositories/users';
import { TokenMongoDocument } from 'src/database/schemas/token.schema';

@Injectable()
export class UsersService {

    constructor(private usersGoodMetRepository: UsersGoodMetRepository,
        private biddingRepository: BiddingRepository,
        private carsRepository: CarsRepository,
        @InjectModel("TokenMongo") private TokenMongoModel: Model<TokenMongoDocument>) { }


    async createCars(cars) {
        try {
            return await this.carsRepository.createCars(cars)
        } catch (error) {
            return { error }
        }
    }

    async createBidding(bidding) {
        try {
            return await this.biddingRepository.createBidding(bidding)
        } catch (error) {
            return { error }
        }
    }


    async createUser(user) {
        try {
            return await this.usersGoodMetRepository.createUser(user)
        } catch (error) {
            return { message: 'Error al cerrar sesión', error }
        }
    }

    async getCars() {
        return this.carsRepository.getCars()
    }

    async getCarsId(id) {
        return this.carsRepository.getCarsId(id)
    }

    async getBiddingId(id) {
        return await this.biddingRepository.getBiddingId(id)
    }

    async getUser(email) {
        try {
            const user = await this.usersGoodMetRepository.getUserVerifi(email)
            return user[0]
        } catch (error) {
            return { message: 'Error al verificar el correo', error }
        }
    }

    async getTokenProof() {
        return { message: 'Este es el token' }
    }

    async getToken(token) {
        console.log('asdasd', token)
        return await this.TokenMongoModel.find({ token: token.trim() })
    }

    async saveToken(token) {
        try {
            const tokenFormat = token.split('Bearer')[1].trim()
            await this.TokenMongoModel.create({ token: tokenFormat })
            return { message: 'successful logout', status: 201 }
            // return tokenSave
        } catch (error) {
            return { message: 'Error al cerrar sesión', error }
        }
    }
}
