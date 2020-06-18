"use strict";
// import * as Cesium from 'cesium';
// import 'cesium/Source/Widgets/widgets.css';
// import { mapConfig } from './constant/config';
// import { IFirePointOption, Rectangle } from './interface/interface';
// import { cameraController } from './camera';
// import { Sprite } from './sprite';
// import { viewerObject } from './viewer/viewobject';
// // require('cesium/Widgets/widgets.css');
// (Cesium as any).buildModuleUrl.setBaseUrl(mapConfig.sourceIP + mapConfig.buildModuleUrl);
// export class Map {
//   public viewer = new Cesium.Viewer(mapConfig.domElementId, {
//     imageryProvider: undefined,
//     // imageryProvider: false as any,
//     // terrainProvider: Cesium.createWorldTerrain(),
//     selectionIndicator: false,
//     animation: false,
//     timeline: false,
//     fullscreenButton: false,
//     infoBox: false,
//     homeButton: false,
//     baseLayerPicker: false,
//     navigationHelpButton: false,
//     geocoder: false,
//     sceneModePicker: false,
//     // useDefaultRenderLoop: false,
//     scene3DOnly: true,
//     // targetFrameRate: 24,
//     requestRenderMode: true,
//     maximumRenderTimeChange: Infinity,
//   });
//   public viewerObject: viewerObject;
//   public cameraController: cameraController;
//   public handler: Cesium.ScreenSpaceEventHandler;
//   public beginLongitude: number = mapConfig.defaultLocation.beginLongitude;
//   public beginLatitude: number = mapConfig.defaultLocation.beginLatitude;
//   public endLongitude: number = mapConfig.defaultLocation.endLongitude;
//   public endLatitude: number = mapConfig.defaultLocation.endLatitude;
//   constructor() {
//     console.log('Map');
//     this.viewerObject = new viewerObject(this.viewer);
//     this.cameraController = new cameraController(this.viewer);
//     this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
//   }
//   public onStartUp() {
//   }
//   public addSprite = (fireOption: IFirePointOption) => {
//     const sprite = new Sprite(this.viewer, this.handler);
//     sprite.addSprite(fireOption);
//     this.cameraController.cameraUpdate(fireOption.location);
//   };
//   public cameraRectangleUpdate = (option: Rectangle) => {
//     this.cameraController.cameraRectangleUpdate(option);
//   };
//   public addTileMapServiceImageryProvider(url: string, format: string = 'jpg') {
//     this.viewerObject.addTileMapServiceImageryProvider(url, format);
//   };
// }
