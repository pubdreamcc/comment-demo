import React, {Component} from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired
  }
  constructor () {
    super()
    this.state = {
      userName: '',
      comments: ''
    }
  }
  componentDidMount () {
    this.textarea.focus()
  }
  componentWillMount () {
    // 获取localstorage中的username值，显示在页面中
    this._loadUsername()
  }
  _loadUsername () {
    const userName = localStorage.getItem('username')
    if (userName) {
      this.setState({userName})
    }
  }
  handleChangeUsername (event) {
    this.setState({
      userName: event.target.value
    })
  }
  handleChangeComments (event) {
    this.setState({
      comments: event.target.value
    })
  }
  _saveUsername (name) {
    if (name) {
      localStorage.setItem('username', name)
    }
  }
  handleusername (event) {
    this._saveUsername(event.target.value)
  }
  handleSubmit () {
    if (!this.state.userName) return alert('请输入大名！')
    if (!this.state.comments) return alert('请发表评论！')
    const {userName, comments} = this.state
    this.props.submit({userName, comments, createdTime: +new Date()})
    // 提交评论之后，清除评论内容，增强用户体验
    this.setState({
      comments: ''
    })
  }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.userName} onChange={this.handleChangeUsername.bind(this)} onBlur={this.handleusername.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.comments} onChange={this.handleChangeComments.bind(this)} ref={(textarea)=>{this.textarea = textarea}}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput