import * as Cesium from 'cesium';
import 'cesium/Source/Widgets/widgets.css';
import { mapConfig } from './constant/config';
import { cameraController } from './camera';
import { Sprite } from './sprite';
import { viewerObject } from './viewer/viewobject';
// require('cesium/Widgets/widgets.css');
// Cesium.buildModuleUrl.setBaseUrl(mapConfig.sourceIP + mapConfig.buildModuleUrl);
export class Map {
    constructor() {
        this.viewer = new Cesium.Viewer(mapConfig.domElementId, {
            // terrainProvider: Cesium.createWorldTerrain(),
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
            // useDefaultRenderLoop: false,
            scene3DOnly: true,
            // targetFrameRate: 24,
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
        this.viewerObject = new viewerObject(this.viewer);
        this.cameraController = new cameraController(this.viewer);
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    }
    onStartUp() {
    }
    addTileMapServiceImageryProvider(url, format = 'jpg') {
        this.viewerObject.addTileMapServiceImageryProvider(url, format);
    }
    ;
}
