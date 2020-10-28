import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";
import ImageModel from "./Image";

@Entity("places")
export default class Place {
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

    @OneToMany(() => ImageModel, (image) => image.place, {
        cascade: ["insert", "update", "remove"],
    })
    @JoinColumn({ name: "place_id" })
    images: ImageModel[];
}
