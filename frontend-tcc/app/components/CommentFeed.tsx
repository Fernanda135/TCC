import React from 'react'
import CommentForm from './CommentForm'

import { IPostMock, CURRENT_USER_MOCK } from "@/app/data/postsMock";

interface PostOptionsProps {
    post: IPostMock;
}

function CommentFeed({ post }: PostOptionsProps) {
    return (
        <div>
            <div className="px-4 py-3 bg-bg-canvas border-t border-border-subtle space-y-3">
                <CommentForm />
                {post.comments && post.comments.length > 0 ? (
                    <div className="space-y-2">
                        {post.comments.map((comment) => (
                            <div key={comment._id} className="flex space-x-2 text-xs">
                                <img
                                    src={comment.user.userImage}
                                    alt={comment.user.firstName}
                                    className="w-6 h-6 rounded-full"
                                />
                                <div className="flex-1 bg-bg-surface p-2 rounded-md border border-border-subtle">
                                    <p className="font-semibold text-text-primary">
                                        {comment.user.firstName} {comment.user.lastName || ''}
                                    </p>
                                    <p className="text-text-primary">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-xs text-text-secondary text-center py-1">
                        Nenhum comentário ainda. Seja o primeiro a comentar!
                    </p>
                )}
            </div>
        </div>
    )
}

export default CommentFeed