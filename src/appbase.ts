import * as Cesium from 'cesium';
import { Viewer } from './view3d/viewer';
import { viewerObject } from './view3d/viewer/viewobject';
import { cameraController } from './view3d/camera';
import { mapConfig, IFirePointOption, Rectangle } from '.';
import { Sprite } from './view3d/sprite';

export class AppBase {

    // public static thisApp: AppBase;
    // public viewer:;

    // constructor() {
    //     AppBase.thisApp = this;

    // }

    public viewer = new Viewer() as Cesium.Viewer;

    public viewerObject: viewerObject;
    public cameraController: cameraController;
    public handler: Cesium.ScreenSpaceEventHandler;

    public beginLongitude: number = mapConfig.defaultLocation.beginLongitude;
    public beginLatitude: number = mapConfig.defaultLocation.beginLatitude;
    public endLongitude: number = mapConfig.defaultLocation.endLongitude;
    public endLatitude: number = mapConfig.defaultLocation.endLatitude;

    constructor() {

        this.viewerObject = new viewerObject(this.viewer);

        this.cameraController = new cameraController(this.viewer);

        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);

    }

    public onStartUp() {
        console.log('AppBase');
    }

    public createViewer() {

    }

    public addSprite = (fireOption: IFirePointOption) => {
        const sprite = new Sprite(this.viewer, this.handler);
        sprite.addSprite(fireOption);
        this.cameraController.cameraUpdate(fireOption.location);
    };


    public cameraRectangleUpdate = (option: Rectangle) => {
        this.cameraController.cameraRectangleUpdate(option);
    };

    public addTileMapServiceImageryProvider(url: string, format: string = 'jpg') {
        this.viewerObject.addTileMapServiceImageryProvider(url, format);
    };

}