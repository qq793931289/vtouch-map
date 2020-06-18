import * as Cesium from 'cesium';
export declare class viewerObject {
    viewer: Cesium.Viewer;
    constructor(viewer: Cesium.Viewer);
    debug(): void;
    init(): void;
    addLayer(): void;
    addTileMapServiceImageryProvider(url: string, format?: string): void;
}
