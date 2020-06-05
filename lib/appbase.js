import * as Cesium from 'cesium';
import { Viewer } from './view3d/viewer';
import { viewerObject } from './view3d/viewer/viewobject';
import { cameraController } from './view3d/camera';
import { mapConfig } from '.';
import { Sprite } from './view3d/sprite';
export class AppBase {
    constructor() {
        // public static thisApp: AppBase;
        // public viewer:;
        // constructor() {
        //     AppBase.thisApp = this;
        // }
        this.viewer = new Viewer();
        this.beginLongitude = mapConfig.defaultLocation.beginLongitude;
        this.beginLatitude = mapConfig.defaultLocation.beginLatitude;
        this.endLongitude = mapConfig.defaultLocation.endLongitude;
        this.endLatitude = mapConfig.defaultLocation.endLatitude;
        this.addSprite = (fireOption) => {
            const sprite = new Sprite(this.viewer, this.handler);
            sprite.addSprite(fireOption);
            this.cameraController.cameraUpdate(fireOption.location);
        };
        this.cameraRectangleUpdate = (option) => {
            this.cameraController.cameraRectangleUpdate(option);
        };
        this.viewerObject = new viewerObject(this.viewer);
        this.cameraController = new cameraController(this.viewer);
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    }
    onStartUp() {
        console.log('AppBase');
    }
    createViewer() {
    }
    addTileMapServiceImageryProvider(url, format = 'jpg') {
        this.viewerObject.addTileMapServiceImageryProvider(url, format);
    }
    ;
}
