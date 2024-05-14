import React from 'react';

const Blog = ({ publications }) => {
  return (
    <div>
      {publications.length > 0 ? (
        publications.map((publication) => (
          <div key={publication._id}>
            <h2>{publication.title}</h2>
            <p>{publication.category}</p>
            <p>{publication.text}</p>
          </div>
        ))
      ) : (
        <p>No publications available.</p>
      )}
    </div>
  );
};

export default Blog;