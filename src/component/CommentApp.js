import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class ComponentApp extends Component {
  constructor () {
    super()
    this.state = {
      // 初始化一个数组，用来保存所有的评论数据
      comments: []
    }
  }
  handleSubmitComment (commentObj) {
    this.state.comments.unshift(commentObj)
    this.setState({
      comments: this.state.comments
    })
  }
  render () {
    return (
      <div className='wrapper'>
        <CommentInput submit={this.handleSubmitComment.bind(this)}></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    )
  }
}

export default ComponentApp