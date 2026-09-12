import { Send } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

function CommentForm() {
    return (
        <div className='flex items-center justify-between gap-2'>
            <Avatar
                alt="User Avatar"
                sx={{ width: 35, height: 35 }}
            />

            <input
                type="text"
                name="postInput"
                placeholder="Deixe seu comentário..."
                className="flex-1 outline-none rounded-full py-1 px-2 border border-border-subtle"
            />
            <IconButton type='submit'>
                <Send sx={{ fontSize: 23 }} className='text-text-secondary hover:text-text-primary' />
            </IconButton>
        </div>
    )
}

export default CommentForm