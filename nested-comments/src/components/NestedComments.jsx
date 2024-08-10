import React, { useState } from 'react' 
import "./style.css"
import useCommentTree from '../hooks/useCommentTree'
import Comment from './Comment'

const NestedComments = ({
  comments,
  onSubmit=()=>{},
  onEdit=()=>{},
  onDelete=()=>{},
}) => {

  const [comment , setcomment]= useState("");
  const {comments: commentsData}=useCommentTree(comments);

  const handleChange = (e)=>{
    setcomment(e.targe.value);
  }

  const handleReply = ()=>{

  }

  const handleSubmit = ()=>{
    if(comment){
      
      setcomment("");
    }
  }

  return (
    <div className='add-comment'>
      <textarea 
          value={comment}
          onChange={handleChange}
          className='comment-textarea'
          rows={3} 
          cols={50} 
          placeholder='Add a new comment...'
      />
      <button className='comment-button' onClick={handleSubmit}>
        Add comment
      </button>
{/* 
      {commentsData && Array.isArray(commentsData) && commentsData.map((comment) => {
        return (
        <Comment key={comment.id} 
        comment={comment} 
        onSubmitComment={handleReply} />
      );
      })} */}

      {commentsData.map((comment) => {
        <Comment
          key={comment.id}
          comment={comment}
          onSubmitComment={handleChange}
        />
      })}

      

    </div>
  )
}

export default NestedComments
