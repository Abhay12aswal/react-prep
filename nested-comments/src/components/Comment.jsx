import React from 'react'

const Comment = ({comment={} , onSubmitComment=()=>{}}) => {
  return (
    <div className='comment'>
      <>
        <p className='comment-content'>{comment.content}</p>
        <p className='comment-info'>Votes: {comment.votesf}</p>
        <p className='comment-info'>
            {new Date(comment.timestamp.toLocaleString())}
        </p>
      </>

      <div className='comment-actions'>
        <button className='comment-button'>Reply</button>
        <button className='comment-button'>Edit</button>
        <button className='comment-button'>Delete</button>
      </div>
      
    </div>
  )
}

export default Comment
