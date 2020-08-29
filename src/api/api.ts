import fetchJsonp from 'fetch-jsonp';


export class API {

  public static async getPoint(
    address: string,
    ak: string = 'UDlMuhOMfdTRVKqtQqLiKg8oH6Lxnagt'
  ): Promise<any> {
    const baseUrl = 'https://api.map.baidu.com/place/v2/search?';
    const url = [
      baseUrl,
      'query=',
      address,
      '&region=',
      '中国',
      '&output=json&ak=',
      ak,
    ].join('');
    return fetchJsonp(url).then((res: any) => res.json());
  }

  public static async getAddress(
    long: number = 121.49884033194,
    lat: number = 31.225696563611,
    ak = 'UDlMuhOMfdTRVKqtQqLiKg8oH6Lxnagt'
  ) {
    const url = 'https://api.map.baidu.com/reverse_geocoding/v3/?ak='
      + ak
      + '&output=json&coordtype=wgs84ll&location='
      + String(lat)
      + ','
      + String(long);
    return fetchJsonp(url).then((res: any) => res.json());
  }

}
