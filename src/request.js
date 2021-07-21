import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.timeout = 3000

// 请求中间件
axios.interceptors.request.use(
    function (config) {
        // Do something with response data
        config.headers["athena_token"] = localStorage.getItem('athena_token')
        return config;
    }, 
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// 响应中间件
axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        if (response.status === 401 ) {
            console.log("remove athena_token")
            localStorage.removeItem('athena_token')
        }
        let token = response.headers["athena_token"]
        if (response.status === 200 && token) {
            console.log("set athena_token")
            localStorage.setItem('athena_token', token)
        }
        return response;
    }, 
    function (error) {
        // Do something with response error
        // message.error("Something goes wrong")
        console.log(error, "asdasdasdasdasd")
        return Promise.reject(error);
    }
);

// export default axios


export default class RequestUtil {
    static GET(path , data) {
        return new Promise((resolve, reject) => {
            axios.get(path, {
                params: data,
              }).then((response) => {
                resolve(response.data);
              })
              .catch((error) => {
                resolve(error);
              });
        });
    }
    static POST(path, data) {
        return new Promise((resolve, reject) => {
            axios.post(path, data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                resolve(err)
            })
        })
    }
    static PUT(path, data) {
        return new Promise((resolve, reject) => {
            axios.put(path, data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                resolve(err)
            })
        })
    }
    static DELETE(path, data) {
        return new Promise((resolve, reject) => {
            axios.delete(path, {
                params: data
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err => {
                resolve(err)
            }))
        })
    }
}