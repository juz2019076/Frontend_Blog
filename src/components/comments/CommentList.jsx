import React, { useState, useEffect } from 'react';
import { fetchComments } from '../../services/api';

const CommentList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const response = await fetchComments();
            setComments(response.data.comments);
        };
        getComments();
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.uid}>
                        <h2>{comment.title}</h2>
                        <p>{comment.comments}</p>
                        <span>{comment.publicationId}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
