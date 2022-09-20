import axios from "axios";

let axiosInstance = null;
let headers = {
    'Content-Type': 'application/json'
}

function setHeaders(inputHeaders) {
    headers = inputHeaders;
}

function getHeaders() {
    return headers;
}


function getInstance() {
    if (axiosInstance != null) {
        return axiosInstance
    }

    axiosInstance = axios.create({
        baseURL: process.env.REACT_API_URL,
        headers: getHeaders()
    })
    //hook interceptor cài ở đây
    axiosInstance.interceptors.request.use(async(config) => {
        const token =  localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    })
    return axiosInstance;
}

function get(endpointApiUrl, payload = {}) {
    return getInstance().get(endpointApiUrl, {
        params: payload
    })
}

function post(endpointApiUrl, payload = {}) {
    return getInstance().post(endpointApiUrl, payload)
}

function put(endpointApiUrl, payload = {}) {
    return getInstance().put(endpointApiUrl, payload);
}

function patch(endpointApiUrl, payload = {}) {
    return getInstance().patch(endpointApiUrl, payload);
}

function del(endpointApiUrl, payload = {}) {
    return getInstance().delete(endpointApiUrl, payload)
}

export const Axios = {
    axiosInstance,
    getHeaders,
    setHeaders,
    get,
    post,
    patch,
    put,
    del
}