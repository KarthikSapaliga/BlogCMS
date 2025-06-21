import { Link } from "react-router-dom"
import Image from "@/components/Image"

function FeaturedPosts() {
    return (
        <div className='mt-4 flex flex-col lg:flex-row gap-8'>
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                <Image src="featured1.jpeg" classname="rounded-3xl object-cover " width="895" />
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="text-primary lg:text-lg ">Web Design</Link>
                    <span className="text-dark1 text-sm">2 days ago</span>
                </div>
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold text-dark3">Designing Beyond Aesthetics: Why UX Matters</Link>
                <p>Design without usability is like a car without wheels. Explore how thoughtful UX boosts engagement and drives results.</p>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="featured2.jpeg" classname="rounded-3xl object-cover w-full h-full" width="298" />
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-primary">Web Design</Link>
                            <span className="text-dark1">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-dark3">Minimalism in Web Design: Less Truly is More</Link>
                        <p>How to balance clarity with creativity using minimalist principles.</p>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="featured3.jpeg" classname="rounded-3xl object-cover w-full h-full" width="298" />
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">03.</h1>
                            <Link className="text-primary">Web Design</Link>
                            <span className="text-dark1">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-dark3">Visual Hierarchy: Guiding the User's Eye.</Link>
                        <p>Learn how layout, color, and contrast work together to direct attention.</p>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="featured4.jpeg" classname="rounded-3xl object-cover w-full h-full" width="298" />
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">04.</h1>
                            <Link className="text-primary">Web Design</Link>
                            <span className="text-dark1">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-dark3">Avoiding Design Fatigue: Keeping Your Site Fresh</Link>
                        <p>Why regular UI updates matter—and how to do it without a full redesign.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedPosts