import React from 'react'
import { connect } from 'react-redux'
import { addVocabulary } from './actions';
import './today.css'

class Today extends React.Component {
    constructor(props){
		super(props);
		this.state = {
            inpValu:'',
            text: ''
		}
    }
    handleInput = (e) => {
        let value = e.target.value
        this.setState({
            inpValu: value
        })
    }
    handleClick = () => {
        const inpVal = this.state.inpValu
        const {addVocabulary} = this.props
        const url = 'learn/addVocabulary'
        const data = {
            'vocabulary_info': inpVal
        }
        addVocabulary(url, 'POST', data)
    }
    render() {
      return (
        <div style={{ height: '100vh', backgroundColor: '#fff' }}>
            <div className="today_wrapper">
              <input placeholder='请输入单词' onChange={this.handleInput} type='text' />
              <button type='button' onClick={this.handleClick}>添加</button>
            </div>
            <div className="content">
            </div>
        </div>
        )
    }
}

export default connect(({addvocabulary}) => ({addvocabulary}), dispatch => ({
    addVocabulary(url, method, data) {
       dispatch(addVocabulary(url, method, data)) 
    }
}))(Today)
