import { MovementData } from "./MovementData";


export interface CreatureData {
    movements: MovementData[];
    mapX: number;
    mapY: number;
    texture: string;
}
