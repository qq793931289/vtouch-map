import * as Cesium from 'cesium';
import { Cartesian3, Rectangle } from '..';
export declare class Camera {
    private _camera;
    constructor(viewer: Cesium.Viewer);
    get camera(): Cesium.Camera;
    cameraUpdate(position: Cartesian3): void;
    cameraRectangleUpdate(option: Rectangle): void;
}
