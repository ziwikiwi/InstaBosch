import axios from 'axios';

class Api {

  constructor() {
    const url = 'http://localhost:3000/instabosch/foellinger';
    axios.defaults.baseURL = url;
    axios.defaults.withCredentials = true  // enable axios post cookie, default false
  }

  getMonthCount(month ,callback) {
    axios.get('/month/' + month + '/')
      .then(result => {
        callback(result.data.data);
      });
  }

  getDateCount(date ,callback) {
    axios.get('/date/' + date + '/')
      .then(result => {
        callback(result.data.data);
      });
  }

  getDayCount(day ,callback) {
    axios.get('/day/' + day + '/')
      .then(result => {
        callback(result.data.data);
      });
  }


}

export default Api;
