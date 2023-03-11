import React from "react";
import "./BlogSite.css"
import {BlogPost} from "./BlogPost";

export const BlogSite = () => {
    return (
        <div className="blog-container">
            <h2>Posts</h2>
            <BlogPost/>
        </div>
    )
}