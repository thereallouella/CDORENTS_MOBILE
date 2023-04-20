import axios from "axios";

axios.defaults.baseURL = 'http://192.168.1.4:8000'; // atng server or backend which is ang django
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
