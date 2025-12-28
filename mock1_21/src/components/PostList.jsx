import React from 'react';
import { usePosts } from '../contexts/PostsContext';
import PostCard from './PostCard';

const PostList = () => {
    const { posts, loading } = usePosts();

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading posts...</p>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="empty-state">
                <p>No posts available</p>
            </div>
        );
    }

    return (
        <div className="posts-grid">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
