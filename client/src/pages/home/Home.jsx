import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Categories from "@/components/Categories";
import FeaturedPosts from "@/components/FeaturedPosts";
import RecentPosts from "@/components/RecentPosts";

function Home() {
    return <div className="mt-4 flex flex-col gap-4">
        {/* BREADCRUMB */}
        <div className="flex gap-4">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="text-primary">Blogs and Articles</span>
        </div>
        {/* INTRODUCTION */}
        <div className="flex items-center justify-between">
            <div className="">
                <h1 className="text-dark3 text-2xl md:text-5xl lg:text-6xl font-bold ">Designing with Purpose: Crafting Web Experiences That Matter.</h1>
                <p className="mt-8 text-md md:text-xl">Great design isn't just about looks—it's about creating interfaces that connect, guide, and inspire. Let's explore what makes a user experience memorable.</p>
            </div>
            <Link to="/write" className="hidden md:block relative">

                <svg
                    viewBox="0 0 200 200"
                    width="200"
                    height="250"
                    className="text-lg tracking-widest animate-spin animatedButton"
                >
                    <path d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75,75 0 1 , 1 -150, 0" id="circlePath" fill="none" />

                    <text className="fill-dark2">
                        <textPath href="#circlePath" startOffset="0%" >Write your story</textPath>
                        <textPath href="#circlePath" startOffset="50%">Write your story</textPath>
                    </text>
                </svg>
                <button className="bg-primary rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-light3">
                    <ArrowUpRight size={52} />
                </button>
            </Link>

        </div>
        {/* CATEGORIES */}
        <Categories />
        {/* FEATURED POSTS */}
        <FeaturedPosts />
        {/* POST LIST */}
        <RecentPosts />
    </div>;
}

export default Home;
