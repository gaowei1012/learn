import {request} from './api/request'
import {handleData, handleErrorData} from './asyncHanler'

export const get_vocabulary_list_success = 'get_vocabulary_list_success'
export const get_vocabulary_list_fail = 'get_vocabulary_list_fail'
export const add_vocabulary_list_success = 'add_vocabulary_list_success'
export const add_vocabulary_list_fail = 'add_vocabulary_list_fail'
export const update_vocabulary_success = 'update_vocabulary_success'
export const update_vocabulary_fail = 'update_vocabulary_fail'


export function getVocabularyList(url, method) {
    return dispatch => {
        request(url, method)
            .then(res => {
                let data = res.data.data;
                handleData(dispatch, ...data, get_vocabulary_list_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_vocabulary_list_fail)
            })
    } 
}

export function addVocabulary(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                handleData(dispatch, data, add_vocabulary_list_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, add_vocabulary_list_fail)
            })
    }
}

export function updateList(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                handleData(dispatch, data, update_vocabulary_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, update_vocabulary_fail)
            })
    }
}
