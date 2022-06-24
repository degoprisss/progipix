import { Cars } from "../../entities/cars";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Cars)
export class CarsRepository extends Repository<Cars> {
    async createCars(cars) {
        try {
            const newCars = this.create(cars)
            return this.save(newCars)
        } catch (error) {
            return { Message: error.message }
        }
    }

    async getCars() {
        return await this.find()
    }

    async getCarsId(id) {
        return await this.findByIds(id)
    }
}