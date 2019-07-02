import React, {Component} from 'react'

class Content extends Component {
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.userName}</span>：
        </div>
        <p>{this.props.comment.comments}</p>
      </div>
    )
  }
}

export default Content