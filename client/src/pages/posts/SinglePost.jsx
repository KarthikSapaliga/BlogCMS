import { Link } from "react-router-dom";
import Image from "@/components/Image";
import PostMenuActions from "@/components/PostMenuActions";
import Search from "@/components/Search";
import Comments from "@/components/Comments";

function SinglePost() {
    return <div className="flex flex-col gap-8">
        <div className="flex gap-8">
            <div className="lg:w-3/5 flex flex-col gap-8">
                <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold text-dark3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque praesentium maiores voluptatem tempore ab ea!</h1>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link>John Doe</Link>
                    <span>on</span>
                    <Link>Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p className="text-gray-500 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cum maiores adipisci ex, illo earum excepturi quod culpa sint, corporis voluptatum? Ea accusantium saepe ratione optio exercitationem voluptates consequatur illum.</p>
            </div>
            <div className="hidden lg:block w-2/5">
                <Image src="postImg.jpeg" width={600} classname="rounded-2xl" />
            </div>
        </div>
        {/* content */}
        <div className="flex flex-col md:flex-row gap-8">
            {/* text */}
            <div className="lg:text-lg flex flex-col gap-6 text-justify">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, tenetur rem nobis rerum minima explicabo id doloremque hic, iste dolorem optio quia quibusdam sint in eius eveniet maxime molestias odit, numquam sapiente. Vero optio quaerat minima, atque laboriosam incidunt porro laborum numquam tempora, corrupti ipsam est animi, quia odio repudiandae consequuntur libero ea commodi? Omnis maxime ipsam voluptate voluptatibus vero cupiditate nostrum ut et quisquam, nihil obcaecati. Consequuntur omnis aspernatur tempore voluptatum in, quae dolorem exercitationem quam itaque perferendis praesentium sed quos saepe libero debitis qui dolore quaerat. Totam iure reiciendis in et reprehenderit quidem harum sequi, ipsa nobis modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, tenetur rem nobis rerum minima explicabo id doloremque hic, iste dolorem optio quia quibusdam sint in eius eveniet maxime molestias odit, numquam sapiente. Vero optio quaerat minima, atque laboriosam incidunt porro laborum numquam tempora, corrupti ipsam est animi, quia odio repudiandae consequuntur libero ea commodi? Omnis maxime ipsam voluptate voluptatibus vero cupiditate nostrum ut et quisquam, nihil obcaecati. Consequuntur omnis aspernatur tempore voluptatum in, quae dolorem exercitationem quam itaque perferendis praesentium sed quos saepe libero debitis qui dolore quaerat. Totam iure reiciendis in et reprehenderit quidem harum sequi, ipsa nobis modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, tenetur rem nobis rerum minima explicabo id doloremque hic, iste dolorem optio quia quibusdam sint in eius eveniet maxime molestias odit, numquam sapiente. Vero optio quaerat minima, atque laboriosam incidunt porro laborum numquam tempora, corrupti ipsam est animi, quia odio repudiandae consequuntur libero ea commodi? Omnis maxime ipsam voluptate voluptatibus vero cupiditate nostrum ut et quisquam, nihil obcaecati. Consequuntur omnis aspernatur tempore voluptatum in, quae dolorem exercitationem quam itaque perferendis praesentium sed quos saepe libero debitis qui dolore quaerat. Totam iure reiciendis in et reprehenderit quidem harum sequi, ipsa nobis modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, tenetur rem nobis rerum minima explicabo id doloremque hic, iste dolorem optio quia quibusdam sint in eius eveniet maxime molestias odit, numquam sapiente. Vero optio quaerat minima, atque laboriosam incidunt porro laborum numquam tempora, corrupti ipsam est animi, quia odio repudiandae consequuntur libero ea commodi? Omnis maxime ipsam voluptate voluptatibus vero cupiditate nostrum ut et quisquam, nihil obcaecati. Consequuntur omnis aspernatur tempore voluptatum in, quae dolorem exercitationem quam itaque perferendis praesentium sed quos saepe libero debitis qui dolore quaerat. Totam iure reiciendis in et reprehenderit quidem harum sequi, ipsa nobis modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, tenetur rem nobis rerum minima explicabo id doloremque hic, iste dolorem optio quia quibusdam sint in eius eveniet maxime molestias odit, numquam sapiente. Vero optio quaerat minima, atque laboriosam incidunt porro laborum numquam tempora, corrupti ipsam est animi, quia odio repudiandae consequuntur libero ea commodi? Omnis maxime ipsam voluptate voluptatibus vero cupiditate nostrum ut et quisquam, nihil obcaecati. Consequuntur omnis aspernatur tempore voluptatum in, quae dolorem exercitationem quam itaque perferendis praesentium sed quos saepe libero debitis qui dolore quaerat. Totam iure reiciendis in et reprehenderit quidem harum sequi, ipsa nobis modi.</p>
            </div>
            {/* menu */}
            <div className="px-4 h-max sticky top-8">
                <h1 className="mb-4 text-sm font-medium">Author</h1>
                <div className="flex items-center gap-2 text-dark2">
                    <Image src="userImg.jpeg" height="48" width="48" classname="w-12 h-12 rounded-full object-cover" />
                    <Link>John Doe</Link>
                </div>
                <p className="py-2 text-sm text-dark1">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="flex gap-2">
                    <Link>
                        <Image src="facebook.svg" />
                    </Link>
                    <Link>
                        <Image src="instagram.svg" />

                    </Link>
                </div>
                <PostMenuActions />
                <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                <div className="flex flex-col gap-2  text-sm">
                    <Link className="underline" to="/">All</Link>
                    <Link className="underline" to="/">Web Design</Link>
                    <Link className="underline" to="/">Development</Link>
                    <Link className="underline" to="/">Search Engines</Link>
                    <Link className="underline" to="/">Marketing</Link>
                </div>
                <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                <Search />
            </div>
            <Comments />
        </div>
    </div>;
}

export default SinglePost;