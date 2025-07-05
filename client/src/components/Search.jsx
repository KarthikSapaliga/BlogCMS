import React from 'react'
import { Search as SearchIcon } from 'lucide-react'

function Search() {
    return (
        <div className='bg-light3 p-2 rounded-full flex items-center gap-2'>
            <SearchIcon />
            <input type="text" placeholder='Search here..' className='bg-transparent outline-none'/>
        </div>
    )
}

export default Search