import React from "react";

export const BlogPost = () => {
    return (
        <div className="blog-post">
            <div className="blog-post_img">
                <img
                    src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""/>
            </div>
            <div className="blog-post_info">
                <div className="blog-post_date">
                    <span>Sagar Developer</span>
                    <span>Nov 12 2021</span>
                </div>
                <h1 className="blog-post_title">Lorem ipsum dolor sit amet.</h1>
                <p className="blog-post_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a, tempore veniam quasi sint
                    fugiat
                    facilis, facere, amet magnam optio velit. Laudantium et temporibus soluta, esse cupiditate
                    aliquid
                    dicta
                    accusantium.
                </p>
                <a href="#" className="blog-post_cta">Read More</a>
            </div>
        </div>
    );

}