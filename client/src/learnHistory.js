import React from 'react'
import {connect} from 'react-redux'
import {getVocabularyList} from './actions'
import './history.css'

class History extends React.Component {
    componentDidMount() {
        const {getVocabularyList} = this.props
        const url = 'learn/getVocabulary'
        getVocabularyList(url, 'GET')
    }
    _list() {
        let getallvocabulary = this.props.getallvocabulary.item
        //console.log(getallvocabulary)
        if (getallvocabulary == undefined) {
            return <div>加载中...</div>
        }
        return (
            <div>
                {getallvocabulary.map(item => {
                    console.log(item)
                    return  <div className='history_list' key={item.id}>
                    <p>{item.vocabulary_info}</p>
                    <p>{item.vocabulary_type === "1" ? <span>已完成</span> : <span>未完成</span> }</p>
                </div>
                })}
            </div>
        )
    }

    render() {
        return (
            <div style={{ height: '100vh', backgroundColor: '#fff' }}>
                {this._list()}
            </div>
        )
    }
}

export default connect(({getallvocabulary}) => ({getallvocabulary}), dispatch => ({
    getVocabularyList(url, method) {
        dispatch(getVocabularyList(url, method))
    }
}))(History)