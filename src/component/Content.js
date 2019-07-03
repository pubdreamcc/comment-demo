import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Content extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired
  }
  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }
  componentWillMount () {
    // 获取评论发布的时间
    this._loadTime()
    this._timer = setInterval(()=>{this._loadTime()}, 5000)
  }
  componentWillUnmount () {
    // 清除定时器
    clearInterval(this._timer)
  }
  _loadTime() {
    const createdTime = this.props.comment.createdTime
    const nowTime = +new Date()
    const duration = (nowTime - createdTime) / 1000
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60, 1)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
    })
  }
  handleDelete () {
    if (this.props.deleteComment && window.confirm('确定删除该条评论吗？')) {
      this.props.deleteComment(this.props.index)
    }
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.userName}</span>：
        </div>
        <p dangerouslySetInnerHTML={{__html: this.props.comment.comments.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`([\S\s]+?)`/g, '<code>$1</code>')}}></p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDelete.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}

export default Content