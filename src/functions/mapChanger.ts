import { MapData } from "~/util/interface/MapData";

export const mapChanger = (mapData: MapData) => {
    if (mapData.newTiles && mapData.newTiles.length > 0)
        mapData.tiles = mapData.newTiles.dequeue();
    
    return;
}