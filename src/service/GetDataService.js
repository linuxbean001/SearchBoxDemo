import axios from 'axios';
import { url } from '../const/url';

export default class GetDataService {

    getData() {
        return axios.get(url.GET_DATA)
            .then(response => {
                console.log('getData : ',JSON.parse(response.data));
                return Promise.resolve(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}