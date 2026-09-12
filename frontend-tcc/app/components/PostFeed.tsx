import React from 'react'

import PostItem from "@/app/components/PostItem"
import { IPostMock } from "@/app/data/postsMock";

interface PostFeedProps {
    posts: IPostMock[];
}

function PostFeed({ posts }: PostFeedProps) {
    return (
        <div className='space-y-2 pb-20'>
            {posts.map((post) => (
                <PostItem key={post._id} post={post}/>
            ))}
        </div>
    )
}

export default PostFeed