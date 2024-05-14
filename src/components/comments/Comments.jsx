import React, { useState } from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.uid}>
          <h3>{comment.title}</h3>
          <p>{comment.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
