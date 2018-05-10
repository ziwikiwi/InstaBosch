import axios from 'axios';

class Api {

  constructor() {
    const url = 'http://localhost:3000/instabosch/foellinger';
    axios.defaults.baseURL = url;
    axios.defaults.withCredentials = true  // enable axios post cookie, default false
  }

  getAllMonthCount(callback) {
    let entryPromises = new Array(); //list of entry get promises
    let entryList = new Array(); //list of entry get promises
    let i;
    for(i = 0; i < 12; i++) { // add all promises to list
      entryPromises.push(axios.get('/month/' + i + '/'));
    }

    axios.all(entryPromises)
      .then((results) => {
        // get entry objects from list of responses
        let i;
        for(i = 0; i < results.length; i++)
          entryList.push(results[i].data.data.count);
        // sort list and call supplied callback function
        callback({ "counts" : entryList});
      })
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
