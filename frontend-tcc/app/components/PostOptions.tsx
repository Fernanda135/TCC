'use client';

import { useState } from 'react';
import { IPostMock, CURRENT_USER_MOCK } from "@/app/data/postsMock";
import { Favorite, FavoriteBorder, ChatBubbleOutlined, Repeat } from "@mui/icons-material";

import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

interface PostOptionsProps {
    post: IPostMock;
}

export default function PostOptions({ post }: PostOptionsProps) {
    const user = CURRENT_USER_MOCK;
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    const [likes, setLikes] = useState<string[]>(post.likes || []);
    const isLiked = likes.includes(user.userId);

    const handleLikeToggle = () => {
        if (isLiked) {
            setLikes((prev) => prev.filter((id) => id !== user.userId));
        } else {
            setLikes((prev) => [...prev, user.userId]);
        }
    };

    return (
        <div className="border-t border-border-subtle mt-2">
            <div className="flex items-center justify-between px-4 py-2 text-text-secondary text-xs">
                <div className="flex items-center space-x-6">
                    <button
                        onClick={handleLikeToggle}
                        className={`flex items-center space-x-1.5 transition-colors cursor-pointer ${isLiked ? "text-state-error" : "hover:text-text-primary"
                            } hover:underline`}
                    >
                        {isLiked ? (
                            <Favorite fontSize="small" className="text-state-error" />
                        ) : (
                            <FavoriteBorder fontSize="small" />
                        )}
                        <span>{likes.length}</span>
                    </button>

                    <button
                        onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                        className="flex items-center space-x-1.5 hover:text-text-primary transition-colors cursor-pointer hover:underline"
                    >
                        <ChatBubbleOutlined fontSize="small" />
                        <span>{post.comments?.length || 0}</span>
                    </button>

                    <button className="flex items-center space-x-1.5 hover:text-text-primary transition-colors cursor-pointer hover:underline">
                        <Repeat fontSize='small' />
                    </button>
                </div>
            </div>


            {isCommentsOpen && (
                <CommentFeed post={post} />
            )}
        </div>
    );
}