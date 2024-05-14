import React, { useState, useEffect } from 'react';
import { fetchPublications } from '../../services/api';

const BlogList = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        const getPublications = async () => {
            const response = await fetchPublications();
            setPublications(response.data.publications);
        };
        getPublications();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {publications.map((pub) => (
                    <li key={pub.uid}>
                        <h2>{pub.title}</h2>
                        <p>{pub.text}</p>
                        <span>{pub.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
