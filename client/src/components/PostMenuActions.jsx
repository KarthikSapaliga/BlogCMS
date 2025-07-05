import React from 'react'
import { Bookmark } from 'lucide-react'
import { Trash } from 'lucide-react'

function PostMenuActions() {
    return (
        <div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
            <div className='flex gap-2 items-center py-2 text-sm cursor-pointer'>
                <Bookmark />
                <span>Save this Post</span>
            </div>
            <div className='flex gap-2 items-center py-2 text-sm cursor-pointer'>
                <Trash />
                <span>Delete this Post</span>
            </div>
        </div>
    )
}

export default PostMenuActions