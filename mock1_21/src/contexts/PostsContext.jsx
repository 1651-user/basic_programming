import React, { createContext, useState, useEffect, useContext } from 'react';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch posts on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                // Store only the first 20 posts
                setPosts(data.slice(0, 20));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Update a post
    const updatePost = (id, updatedData) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === id ? { ...post, ...updatedData } : post
            )
        );
    };

    // Delete a post
    const deletePost = (id) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };

    return (
        <PostsContext.Provider value={{ posts, loading, updatePost, deletePost }}>
            {children}
        </PostsContext.Provider>
    );
};

// Custom hook for using posts context
export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
};
