import * as Cesium from 'cesium';
import { viewerObject } from './view3d/viewer/viewobject';
import { cameraController } from './view3d/camera';
import { IFirePointOption, Rectangle } from '.';
export declare class AppBase {
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
    createViewer(): void;
    addSprite: (fireOption: IFirePointOption) => void;
    cameraRectangleUpdate: (option: Rectangle) => void;
    addTileMapServiceImageryProvider(url: string, format?: string): void;
}
