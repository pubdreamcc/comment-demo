import React, {Component} from 'react'
import Content from './Content'
class CommentList extends Component {
  static defaultProps = {
    comments: [{userName: 'cc', comments: 'cc is very good!'},{userName: 'cc', comments: 'cc is very good!'},{userName: 'cc', comments: 'cc is very good!'}]
  }
  render () {
    return (
      <div className='comment-list'>
        {this.props.comments.map((comment, i) => <Content comment={comment} key={i} />)}
      </div>
    )
  }
}

export default CommentList