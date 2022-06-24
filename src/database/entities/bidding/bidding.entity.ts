import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cars } from "../cars";
import { Timestamps } from "../inheritance";
import { UsersGootMet } from "../users";

@Entity('Bidding')
export class Bidding extends Timestamps {

    @PrimaryGeneratedColumn('uuid')
    biddingId: string;

    @Column()
    proposed_price: string;

    @ManyToOne(type => Cars, user => user.cars)
    @JoinColumn({ name: 'cars_fk_id' })
    cars_fk_id: Cars

    @ManyToOne(type => UsersGootMet, user => user.bidding)
    @JoinColumn({ name: 'bidding_fk_id' })
    bidding_fk_id: UsersGootMet

}