import * as Cesium from 'cesium';
import { mapConfig } from '../constant';
export class viewerObject {
    constructor(viewer) {
        this.viewer = viewer;
        this.viewer.cesiumWidget.creditContainer.style.display = "none";
        this.init();
        this.debug();
    }
    debug() {
        this.viewer.scene.debugShowFramesPerSecond = mapConfig.debug;
    }
    init() {
        mapConfig.debug && console.log(this.viewer);
        this.viewer.scene.skyBox && (this.viewer.scene.skyBox.show = false);
        this.viewer.scene.screenSpaceCameraController.enableTilt = false;
        this.viewer.scene.screenSpaceCameraController.enableLook = true;
        this.viewer.scene.screenSpaceCameraController.enableRotate = true;
        this.viewer.scene.screenSpaceCameraController.enableTranslate = true;
        this.viewer.scene.screenSpaceCameraController.enableZoom = true;
        this.viewer.scene.globe.maximumScreenSpaceError = 4 / 3;
        this.viewer.scene.sun = new Cesium.Sun();
        this.viewer.scene.sun.show = false;
        this.viewer.scene.moon = new Cesium.Moon({
            show: false,
        });
        this.addLayer();
    }
    ;
    addLayer() {
    }
    addTileMapServiceImageryProvider(url, format = 'jpg') {
        const layer = this.viewer.scene.imageryLayers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
            url: url,
            fileExtension: format,
        }));
        layer.brightness = 1.40;
        layer.saturation = 1.80;
    }
    ;
}
