import fetchJsonp from 'fetch-jsonp';
export class API {
    static async fetchBaiduMap(address, ak = 'UDlMuhOMfdTRVKqtQqLiKg8oH6Lxnagt') {
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
        return fetchJsonp(url).then((res) => res.json());
    }
}
