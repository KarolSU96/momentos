import axios from "axios";

axios.defaults.baseURL = 'https://momentos-pl-732efa6e2e31.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;