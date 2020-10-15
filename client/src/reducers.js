
import {combineReducers} from 'redux'
import {addVocabularyAction, getAllVocabularyAction, updateVocabularyAction} from './reducers/vocabulary'


const root = combineReducers({
    updateVocabulary: updateVocabularyAction,
    addvocabulary: addVocabularyAction,
    getallvocabulary: getAllVocabularyAction
})

export default root