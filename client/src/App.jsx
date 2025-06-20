import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar"

import Login from "@/pages/auth/Login.jsx";
import Register from "@/pages/auth/Register.jsx";
import Home from "@/pages/home/Home.jsx";
import PostList from "@/pages/posts/PostList.jsx";
import SinglePost from "@/pages/posts/SinglePost";
import Write from "@/pages/write/Write";

function App() {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/:slug" element={<SinglePost />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
