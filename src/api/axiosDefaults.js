import axios from "axios";

axios.defaults.baseURL = 'https://rest-framework-v2-e5f7a43eadcc.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;