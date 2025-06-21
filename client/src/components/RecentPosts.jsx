import PostListItem from "@/components/PostListItem"

function RecentPosts() {
    return (
        <div className=''>
            <h1 className='my-8 text-2xl text-dark3 font-semibold'>Recent Posts</h1>
            <div className="flex flex-col gap-12 mb-8">
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
            </div>
        </div>
    )
}

export default RecentPosts