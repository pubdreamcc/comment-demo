import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
class CommentList extends Component {
  // static defaultProps = {
  //   comments: [{userName: 'cc', comments: 'cc is very good!'},{userName: 'cc', comments: 'cc is very good!'},{userName: 'cc', comments: 'cc is very good!'}]
  // }
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteData: PropTypes.func.isRequired
  }
  handleDeleteComment (i) {
    if (this.props.deleteData) {
      this.props.deleteData(i)
    }
  }
  render () {
    return (
      <div className='comment-list'>
        {this.props.comments.map((comment, i) => <Content comment={comment} key={i} index={i} deleteComment={this.handleDeleteComment.bind(this)}/>)}
      </div>
    )
  }
}

export default CommentList