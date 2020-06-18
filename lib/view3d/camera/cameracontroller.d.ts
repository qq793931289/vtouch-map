import * as Cesium from 'cesium';
import { Cartesian3, Rectangle } from '../';
export declare class cameraController {
    private _camera;
    constructor(viewer: Cesium.Viewer);
    initChinaViewer: () => void;
    get camera(): Cesium.Camera;
    cameraUpdate(position: Cartesian3): void;
    cameraRectangleUpdate(option: Rectangle): void;
}
