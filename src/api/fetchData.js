import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // *** CANNOT USE LOCAL HOST DIRECTLY ==> WILL HAVE A LOT OF ERROR
  // *** NEED TO USE NGROK TO WRAP IT
  baseURL: "http://b145-159-196-169-255.ngrok.io",
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff
// instance.interceptors.request...

export default instance;

// Usage
// import yelp from '.....'
// yelp.get('/posts' )
// .then(response => {
//        this.setState({data: response});
//     });
// })
// .catch(error => {
//     this.setState({error: true});
// });
