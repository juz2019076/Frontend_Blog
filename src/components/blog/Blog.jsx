import React from 'react';

const Blog = ({ publications }) => {
  return (
    <div>
      {publications.map((publication) => (
        <div key={publication.uid}>
          <h2>{publication.title}</h2>
          <p>{publication.category}</p>
          <p>{publication.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
