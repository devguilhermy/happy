import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import Places from "./Places";

@Entity("images")
export default class Images {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Places, (place) => place.images)
    @JoinColumn({ name: "place_id" })
    place: Places;
}
