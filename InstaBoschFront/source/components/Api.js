import axios from 'axios';

class Api {

  constructor() {
    const url = 'http://localhost:3000/instabosch/';
    axios.defaults.baseURL = url;
    axios.defaults.withCredentials = true  // enable axios post cookie, default false
  }

  getAllMonthCount(place, callback) {
    let entryPromises = new Array(); //list of entry get promises
    let entryList = new Array(); //list of entry get promises
    let i;
    for(i = 0; i < 12; i++) { // add all promises to list
      entryPromises.push(axios.get(place + '/month/' + i + '/'));
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

  getMonthCount(place, month ,callback) {
    axios.get(place + '/month/' + month + '/')
      .then(result => {
        callback(result.data.data);
      });
  }

  getDateCount(place, date ,callback) {
    axios.get(place + '/date/' + date + '/')
      .then(result => {
        callback(result.data.data);
      });
  }

  getDayCount(place, day ,callback) {
    axios.get(place + '/day/' + day + '/')
      .then(result => {
        callback(result.data.data);
      });
  }


}

export default Api;
