import * as Cesium from 'cesium';
import { IFirePointOption } from '..';
export declare class Sprite {
    viewer: Cesium.Viewer;
    handler: Cesium.ScreenSpaceEventHandler;
    constructor(viewer: Cesium.Viewer, handler: Cesium.ScreenSpaceEventHandler);
    addSprite(fireOption: IFirePointOption): void;
    hander(entity: Cesium.Entity, fireOption: IFirePointOption): void;
}
