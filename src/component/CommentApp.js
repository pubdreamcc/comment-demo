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
  componentWillMount () {
    // 显示已经评论的信息
    let comments = JSON.parse(localStorage.getItem('comments'))
    if (comments) {
      // 显示用户评论信息
      this.setState({comments})
    }
  }
  _saveComment (comment) {
    // 持久化存储用户的评论信息
    localStorage.setItem('comments', JSON.stringify(comment))
  }
  handleSubmitComment (commentObj) {
    this.state.comments.unshift(commentObj)
    this.setState({
      comments: this.state.comments
    })
    this._saveComment(this.state.comments)
  }
  handleDelete (i) {
    // 删除对应的评论信息
    const comments = this.state.comments
    comments.splice(i, 1)
    this.setState({comments})
    this._saveComment(comments)
  }
  render () {
    return (
      <div className='wrapper'>
        <CommentInput submit={this.handleSubmitComment.bind(this)}></CommentInput>
        <CommentList comments={this.state.comments} deleteData={this.handleDelete.bind(this)}></CommentList>
      </div>
    )
  }
}

export default ComponentApp