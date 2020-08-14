import fetchJsonp from 'fetch-jsonp';


export class API {
  public static async fetchBaiduMap(
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
}
