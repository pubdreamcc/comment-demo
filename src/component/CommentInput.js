import React, {Component} from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      comments: ''
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
  handleSubmit () {
    if (!this.state.userName) return alert('请输入大名！')
    if (!this.state.comments) return alert('请发表评论！')
    const {userName, comments} = this.state
    this.props.submit({userName, comments})
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
            <input value={this.state.userName} onChange={this.handleChangeUsername.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.comments} onChange={this.handleChangeComments.bind(this)}/>
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