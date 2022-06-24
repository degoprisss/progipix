import { Bidding } from "../../entities/bidding";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Bidding)
export class BiddingRepository extends Repository<Bidding> {

    async createBidding(bidding) {
        try {
            const newBidding = this.create(bidding)
            return this.save(newBidding)
        } catch (error) {
            return { Message: error.message }
        }
    }

    async getBiddingId(id) {
        try {
            const queryBuilder = await this.createQueryBuilder("Bidding")
                .select([
                    'Bidding.biddingId AS "biddingId"',
                    'Bidding.proposed_price AS "proposed_price"',
                    'cars.carsId AS "carsId"',
                    'cars.photo AS "photo"',
                    'cars.model AS "model"',
                    'cars.type AS "type"',
                    'cars.color AS "color"',
                    'cars.price AS "price"',
                    'user.userId AS "userId"',
                ])
                .leftJoin("Bidding.cars_fk_id", "cars")
                .leftJoin("Bidding.bidding_fk_id", "user")
                .where("Bidding.bidding_fk_id = :userId", { userId: id })
                .getRawMany();
            return queryBuilder
        } catch (error) {
            return { Message: error.message }
        }
    }

}
