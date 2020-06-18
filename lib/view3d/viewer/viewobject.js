import * as Cesium from 'cesium';
import { mapConfig } from '../constant';
export class viewerObject {
    constructor(viewer) {
        this.viewer = viewer;
        this.viewer.cesiumWidget.creditContainer.style.display = "none";
        // 访问球体对象（viewer.scene.globe） 并设置颜色
        // this.viewer.scene.globe.baseColor = Cesium.Color.BLACK;
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
        // this.viewer.scene.fxaa = false;
        this.viewer.scene.globe.maximumScreenSpaceError = 4 / 3;
        // console.log(this.viewer.scene);
        this.viewer.scene.sun = new Cesium.Sun();
        this.viewer.scene.sun.show = false;
        this.viewer.scene.moon = new Cesium.Moon({
            show: false,
        });
        // this.viewer.scene.moon.destroy();
        this.addLayer();
    }
    ;
    addLayer() {
        // 添加mapbox自定义地图实例
        // const layer = new Cesium.MapboxStyleImageryProvider({
        //     url: 'https://api.mapbox.com/styles/v1',
        //     username: 'dengzengjian',
        //     styleId: 'ck5290o2z121u1cle7mdtfmdk',
        //     accessToken: 'pk.eyJ1IjoiZGVuZ3plbmdqaWFuIiwiYSI6ImNqbGhnbWo1ZjFpOHEzd3V2Ynk1OG5vZHgifQ.16zy39I-tbQv3K6UnRk8Cw',
        //     scaleFactor: true,
        // });
        // const layer = new Cesium.ArcGisMapServerImageryProvider({
        //     url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        // });
        // this.viewer.imageryLayers.addImageryProvider(layer);
    }
    addTileMapServiceImageryProvider(url, format = 'jpg') {
        const layer = this.viewer.scene.imageryLayers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
            // ImageryProvider: false,
            url: url,
            fileExtension: format,
        }));
        layer.brightness = 1.40;
        layer.saturation = 1.80;
        // // 改变当前地图的组织结构
        // layer.minificationFilter && (layer.minificationFilter = Cesium.TextyreMinificationFiler.NEAREST);
        // layer.magnificationFilter && (layer.magnificationFilter = Cesium.TextureMagnificationFilter.NEAREST);
    }
    ;
}
