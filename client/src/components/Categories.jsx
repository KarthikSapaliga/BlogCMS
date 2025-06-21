import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'


function Categories() {
    return (
        <div className='hidden md:flex bg-light1 rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
            <div className='flex-1 flex items-center justify-between flex-wrap'>
                <Link to="/posts" className='bg-primary text-white rounded-full px-4 py-2'>All Posts</Link>
                <Link to="/posts?category=web-design" className='hover:bg-light2 text-dark2 rounded-full px-4 py-2'>Web Design</Link>
                <Link to="/posts?category=development" className='hover:bg-light2 text-dark2 rounded-full px-4 py-2'>Development</Link>
                <Link to="/posts?category=databases" className='hover:bg-light2 text-dark2 rounded-full px-4 py-2'>Databases</Link>
                <Link to="/posts?category=search-engines" className='hover:bg-light2 text-dark2 rounded-full px-4 py-2'>Search Engines</Link>
                <Link to="/posts?category=marketing" className='hover:bg-light2 text-dark2 rounded-full px-4 py-2'>Marketing</Link>
            </div>
            <span className='text-xl font-medium'>|</span>
            <div className='bg-light2 p-2 rounded-full flex items-center gap-2'>
                <Search />
                <input type="text" placeholder='Search a post...' className='bg-transparent outline-none' />
            </div>
        </div>
    )
}

export default Categories