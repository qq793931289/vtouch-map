export class Cartesian {
    static offset2(longitude, latitude) {
        return {
            longitude: longitude + this._offsetLongitude,
            latitude: latitude + this._offsetLatitude,
        };
    }
    ;
}
Cartesian._offsetLongitude = 0;
Cartesian._offsetLatitude = 0;
