import {
    get_vocabulary_list_fail,
    get_vocabulary_list_success,
    update_vocabulary_fail,
    update_vocabulary_success,
    add_vocabulary_list_fail,
    add_vocabulary_list_success
} from '../actions'

export function getAllVocabularyAction(state = {}, action) {
    switch(action.type) {
        case get_vocabulary_list_success:
            return {
                ...state,
                item: action.data
            }
        case get_vocabulary_list_fail:
            return {
                ...state
            } 
        default:
            return state
    }
}

export function addVocabularyAction(state = {}, action) {
    switch(action.type) {
        case add_vocabulary_list_success:
            return {
                ...state,
                item: action
            }
        case add_vocabulary_list_fail:
            return {
                ...state
            } 
        default:
            return state
    }
}

export function updateVocabularyAction(state = {}, action) {
    switch(action.type) {
        case update_vocabulary_success:
            return {
                ...state,
                item: action.item
            }
        case update_vocabulary_fail:
            return {
                ...state
            } 
        default:
            return state
    }
}