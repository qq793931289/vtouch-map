import * as Cesium from 'cesium';
// import { Viewer } from './view3d/viewer';
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

  // public viewer = new Viewer() as Cesium.Viewer;
  public viewer = new Cesium.Viewer(mapConfig.domElementId, {
    imageryProvider: undefined,
    // imageryProvider: this._googleMap(),
    // terrainProvider: Cesium.createWorldTerrain(),
    // imageryProvider: new Cesium.TileMapServiceImageryProvider({
    //   url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
    // }),
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
    // useDefaultRenderLoop: false,
    // targetFrameRate: 12,
  });;

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