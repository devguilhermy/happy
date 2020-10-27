import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("places")
export default class Places {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    about: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    instructions: string;

    @Column()
    working_hours: string;

    @Column()
    working_weekends: boolean;
}
