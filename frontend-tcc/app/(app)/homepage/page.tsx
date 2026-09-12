'use client';

import UserInformation from "@/app/components/UserInformation";
import PostForm from "@/app/components/PostForm";
import PostFeed from "@/app/components/PostFeed";

import { POSTS_MOCK, IPostMock } from "@/app/data/postsMock";
import { useState } from "react";
import { Skeleton } from "@mui/material";


export default function Homepage() {

    const [posts] = useState<IPostMock[]>(POSTS_MOCK);
    // console.log(posts)

    return (
        <div className="grid grid-cols-8 mt-5 sm:px-5">
            <section className="hidden md:inline md:col-span-2">
                <UserInformation />
            </section>

            <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
                <PostForm />

                <PostFeed posts={posts} />
            </section>


            <section className="hidden xl:inline justify-center col-span-2">
                <Skeleton variant="rectangular" height={500} />
            </section>
        </div>
    );
};
