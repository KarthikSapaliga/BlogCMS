import { Link } from "react-router-dom"
import Image from "@/components/Image"

function PostListItem() {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>

            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" classname="rounded-2xl object-cover " width="735" />
            </div>

            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold text-dark3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>

                <div className="flex items-center gap-2 text-sm text-dark1">
                    <span>Written by</span>
                    <Link className="text-primary">John Doe</Link>
                    <span>on</span>
                    <Link className="text-primary">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores delectus repellat quaerat sit provident quos qui, accusamus repellendus illo magni, velit praesentium dolore eum minima quam veniam! Perspiciatis temporibus corporis blanditiis voluptatibus magnam maxime eius quaerat ex laborum dolor.</p>
                <Link to="/test" className="underline text-primary">Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem