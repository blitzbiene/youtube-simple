import axios from 'axios';

export default axios.create({
      baseURL:"https://www.googleapis.com/youtube/v3",
      params:{
          key:"AIzaSyBQ0KSE6oMl8IIrahSqODPd90faGRYsZrY",
          part:"snippet",
          maxResults:5
      }
});