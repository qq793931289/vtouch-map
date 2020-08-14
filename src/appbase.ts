import * as Cesium from 'cesium';
import { viewerObject } from './view3d/viewer/viewobject';
import { cameraController } from './view3d/camera';
import { mapConfig, IFirePointOption, Rectangle } from '.';
import { Sprite } from './view3d/sprite';
import 'cesium/Source/Widgets/widgets.css';
(Cesium as any).buildModuleUrl.setBaseUrl(mapConfig.sourceIP + mapConfig.buildModuleUrl);
export class AppBase {
  public viewer = new Cesium.Viewer(mapConfig.domElementId, {
    imageryProvider: false as any,
    selectionIndicator: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    infoBox: false,
    homeButton: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    geocoder: false,
    sceneModePicker: false,
    scene3DOnly: true,
    requestRenderMode: true,
    maximumRenderTimeChange: Infinity,
  });;

  public viewerObject: viewerObject;
  public cameraController: cameraController;
  public handler: Cesium.ScreenSpaceEventHandler;

  public beginLongitude: number = mapConfig.defaultLocation.beginLongitude;
  public beginLatitude: number = mapConfig.defaultLocation.beginLatitude;
  public endLongitude: number = mapConfig.defaultLocation.endLongitude;
  public endLatitude: number = mapConfig.defaultLocation.endLatitude;

  constructor() {
    console.log('AppBase');
    this.viewerObject = new viewerObject(this.viewer);

    this.cameraController = new cameraController(this.viewer);

    this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);

  }

  public onStartUp() {
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