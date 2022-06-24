import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bidding } from "../bidding/bidding.entity";
import { Timestamps } from "../inheritance";

@Entity('user_progipix')
export class UsersGootMet extends Timestamps {

    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column()
    names: string;

    @Column()
    lastnames: string;

    @Column({ type: 'bigint' })
    phone: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    photos: string

    @Column({ nullable: true })
    state: boolean;

    @OneToMany(type => Bidding, bidding => bidding.bidding_fk_id)
    bidding: Bidding

}