import axios from 'axios'
const baseURL = 'http://127.0.0.1:7076/api/'

export const request = (url, method, data = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: baseURL,
            url: url,
            method: method,
            data: data
        })
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
}
