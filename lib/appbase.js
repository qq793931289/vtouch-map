import * as Cesium from 'cesium';
// import { Viewer } from './view3d/viewer';
import { viewerObject } from './view3d/viewer/viewobject';
import { cameraController } from './view3d/camera';
import { mapConfig } from '.';
import { Sprite } from './view3d/sprite';
import 'cesium/Source/Widgets/widgets.css';
Cesium.buildModuleUrl.setBaseUrl(mapConfig.sourceIP + mapConfig.buildModuleUrl);
export class AppBase {
    constructor() {
        // public static thisApp: AppBase;
        // public viewer:;
        // constructor() {
        //     AppBase.thisApp = this;
        // }
        // public viewer = new Viewer() as Cesium.Viewer;
        // const url = "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali";
        // const imageryProvider = new Cesium.UrlTemplateImageryProvider({ url: url });
        this.viewer = new Cesium.Viewer(mapConfig.domElementId, {
            imageryProvider: undefined,
            // imageryProvider: new Cesium.UrlTemplateImageryProvider({ url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali' }) as any,
            // imageryProvider: new Cesium.OpenStreetMapImageryProvider({
            //   url: 'https://a.tile.openstreetmap.org/'
            // }) as any,
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
        });
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
        console.log('AppBase');
        this.viewerObject = new viewerObject(this.viewer);
        this.cameraController = new cameraController(this.viewer);
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    }
    ;
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
