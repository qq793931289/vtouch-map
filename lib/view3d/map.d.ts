import * as Cesium from 'cesium';
import 'cesium/Source/Widgets/widgets.css';
import { IFirePointOption, Rectangle } from './interface/interface';
import { cameraController } from './camera';
import { viewerObject } from './viewer/viewobject';
export declare class Map {
    viewer: Cesium.Viewer;
    viewerObject: viewerObject;
    cameraController: cameraController;
    handler: Cesium.ScreenSpaceEventHandler;
    beginLongitude: number;
    beginLatitude: number;
    endLongitude: number;
    endLatitude: number;
    constructor();
    onStartUp(): void;
    addSprite: (fireOption: IFirePointOption) => void;
    cameraRectangleUpdate: (option: Rectangle) => void;
    addTileMapServiceImageryProvider(url: string, format?: string): void;
}
