import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";
import Images from "./Images";

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

    @OneToMany(() => Images, (image) => image.place, {
        cascade: ["insert", "update", "remove"],
    })
    @JoinColumn({ name: "place_id" })
    images: Images[];
}
