import React, { useState } from 'react';
import { createPublication } from '../../services/api';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPublication = { title, category, text };
        await createPublication(newPublication);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div>
                <label>Text:</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} required></textarea>
            </div>
            <button type="submit">Create Publication</button>
        </form>
    );
};

export default BlogForm;
