'use client';

import { useState } from "react";
import { IPostMock, CURRENT_USER_MOCK } from "../data/postsMock";
import PostOptions from "./PostOptions";
import { Delete } from "@mui/icons-material";
import { Avatar, Snackbar, Alert, IconButton } from "@mui/material";

interface PostItemProps {
    post: IPostMock;
    onDelete?: (postId: string) => void;
}

function PostItem({ post, onDelete }: PostItemProps) {
    const user = CURRENT_USER_MOCK;
    const isAuthor = user?.userId === post.user.userId;

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleDeleteClick = () => {
        onDelete?.(post._id);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (
        _event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    const fullName = `${post.user.firstName} ${post.user.lastName || ''}`.trim();
    const username = post.user.firstName.toLowerCase();

    return (
        <div className="bg-bg-surface rounded-md border border-border-subtle mb-3">
            <div className="p-4 flex space-x-2">
                <div>
                    <Avatar
                        alt={fullName}
                        src={post.user.userImage}
                        sx={{ width: 50, height: 50 }}
                    />
                </div>

                <div className="flex justify-between flex-1">
                    <div>
                        <p className="font-semibold text-text-primary text-sm flex items-center">
                            {fullName}
                            {isAuthor && (
                                <span className="bg-border-subtle text-on-action-primary text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase ml-2">
                                    Autor
                                </span>
                            )}
                        </p>

                        <p className="text-xs text-text-secondary">
                            @{username}
                        </p>

                        <p className="text-xs text-text-secondary">
                            {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                        </p>
                    </div>

                    {isAuthor && (
                        <IconButton
                            onClick={handleDeleteClick}
                        >
                            <Delete />
                        </IconButton>
                    )}
                </div>
            </div>

            <div>
                <p className="px-4 pb-2 mt-2 text-text-primary text-sm">{post.text}</p>
                {post.imageUrl && (
                    <img
                        src={post.imageUrl}
                        alt="Post Image"
                        className="w-full mx-auto max-h-96 object-cover"
                    />
                )}
            </div>

            <PostOptions post={post} />

            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    className="bg-state-success!"
                >
                    Publicação removida com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default PostItem;