import { MovementType } from "./MovementType";

export class DestroyMovementType extends MovementType {
    moveObject(): void {
        this.mapObject.destroy(true);
    }
}