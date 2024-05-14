import React, { useState } from 'react';
import { createComment } from '../../services/api';

const CommentForm = ({ publicationId }) => {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = { title, comments, publicationId };
        await createComment(newComment);
        // Handle success and error states
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Comment:</label>
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} required></textarea>
            </div>
            <button type="submit">Create Comment</button>
        </form>
    );
};

export default CommentForm;
