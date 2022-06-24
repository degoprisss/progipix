import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bidding } from "../bidding/bidding.entity";
import { Timestamps } from "../inheritance";

@Entity('cars')
export class Cars extends Timestamps {

    @PrimaryGeneratedColumn('uuid')
    carsId: string;

    @Column()
    photo: string;

    @Column()
    model: string;

    @Column()
    type: string;

    @Column()
    color: string;

    @Column()
    price: string;

    @OneToMany(type => Bidding, bidding => bidding.cars_fk_id)
    cars: Bidding

}