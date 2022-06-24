import { UserDto } from "src/utils/dto/users.dto";
import { EntityRepository, Repository } from "typeorm";
import { UsersGootMet } from '../../entities/users'

@EntityRepository(UsersGootMet)
export class UsersGoodMetRepository extends Repository<UsersGootMet> {

    // Función para la creación de un usuario. 
    async createUser(user: UserDto) {
        try {
            const newUser = this.create(user)
            return this.save(newUser)
        } catch (error) {
            return { Message: error.message }
        }
    }

    async getUserVerifi(email) {
        try {
            return await this.find({ email: email })
        } catch (error) {
            return { Message: 'Error al momento de verificar el usuario', error }
        }
    }

    async getUserId(id) {
        try {
            return await this.findByIds(id)
        } catch (error) {
            return { Message: 'Error al momento de verificar el usuario', error }
        }
    }

}