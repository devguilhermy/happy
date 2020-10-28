import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import PlaceModel from "./Place";

@Entity("images")
export default class Image {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => PlaceModel, (place) => place.images)
    @JoinColumn({ name: "place_id" })
    place: PlaceModel;
}
