import React, { useState } from 'react';
import { usePosts } from '../contexts/PostsContext';
import EditModal from './EditModal';

const PostCard = ({ post }) => {
    const { updatePost, deletePost } = usePosts();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deletePost(post.id);
        }
    };

    return (
        <>
            <div className="post-card">
                <div className="post-header">
                    <span className="post-id">#{post.id}</span>
                </div>

                <h3 className="post-title">{post.title}</h3>
                <p className="post-body">{post.body}</p>

                <div className="post-actions">
                    <button
                        className="btn btn-edit"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>

            {isEditing && (
                <EditModal
                    post={post}
                    onSave={updatePost}
                    onClose={() => setIsEditing(false)}
                />
            )}
        </>
    );
};

export default PostCard;
