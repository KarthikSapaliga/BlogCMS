import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Image from "@/components/Image";

const navSections = [
    { name: "Home", route: "/home" },
    { name: "Trending", route: "/trending" },
    { name: "Popular", route: "/popular" },
    { name: "About", route: "/about" },
];

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">

            <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-dark3">
                <Image src="/logo.png" alt="Logo" width={28} height={28} />
                <h1>KBlog</h1>
            </Link>

            <div className="md:hidden">
                <div
                    onClick={() => setSidebarOpen((prev) => !prev)}
                    className="cursor-pointer text-3xl"
                >
                    {sidebarOpen ? "X" : "☰"}
                </div>
                <nav
                    className={`w-full h-screen bg-light2 flex flex-col absolute justify-center items-center top-16 ${sidebarOpen ? "left-0" : "left-[100%]"
                        } transition-all ease-in-out gap-2 font-medium text-lg`}
                >
                    {navSections.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                to={link.route}
                                className="min-w-32 text-center hover:bg-light3 px-4 py-2 rounded-full text-dark2 hover:text-dark3"
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <SignedOut>
                        <Link
                            to="/login"
                            className="min-w-32 px-4 py-2 rounded-3xl bg-primary text-white text-center mb-16"
                        >
                            Login
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </nav>
            </div>

            {/* NAV ITEMS */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                {navSections.map((link) => {
                    return (
                        <Link key={link.name} to={link.route} className="text-dark2 hover:text-dark3">
                            {link.name}
                        </Link>
                    );
                })}
                <SignedOut>
                    <Link
                        to="/login"
                        className="min-w-32 px-4 py-2 rounded-3xl bg-primary text-white text-center mb-16"
                    >
                        Login
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
}

export default Navbar;
