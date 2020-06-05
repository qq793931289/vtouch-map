import * as Cesium from 'cesium';
import { mapConfig, Cartesian } from '..';
export class Camera {
    constructor(viewer) {
        // this._viewer = viewer;
        this._camera = viewer.camera;
        return this;
    }
    ;
    get camera() {
        return this._camera;
    }
    ;
    cameraUpdate(position) {
        const { longitude, latitude } = Cartesian.offset2(position.longitude, position.latitude);
        this._camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, mapConfig.fireHeight),
        });
    }
    cameraRectangleUpdate(option) {
        // -0.01185，-0.00328
        const { longitude: beginLongitude, latitude: beginLatitude } = Cartesian.offset2(option.beginLongitude, option.beginLatitude);
        const { longitude: endLongitude, latitude: endLatitude } = Cartesian.offset2(option.endLongitude, option.endLatitude);
        console.log(beginLongitude, beginLatitude, endLongitude, endLatitude);
        this._camera.flyTo({
            destination: Cesium.Rectangle.fromDegrees(
            // 113.392367, 23.062804, 113.393429, 23.062706,
            beginLongitude, beginLatitude, endLongitude, endLatitude)
        });
    }
    ;
}
