import React from "react";
import {Review_Record} from "types";

interface Props {
    review: Review_Record;
}

export const BlogPost = (props: Props) => {
    const {review} = props;
    return (
        <div className="blog-post">
            <div className="blog-post_img">
                <img
                    src={review.background_image}
                    alt={review.name + " theme image"}
                />
            </div>
            <div className="blog-post_info">
                {/*@TODO blog_post_date*/}
                <div className="blog-post_date">
                    <span>Sagar Developer</span>
                    <span>Nov 12 2021</span>
                </div>
                <h1 className="blog-post_title">{review.name}</h1>
                <p className="blog-post_text">
                    {/*@ts-ignore*/}
                    {[...review.review].slice(0, 300).join("") + "..."}
                </p>
                <a href="#" className="blog-post_cta">Read More</a>
            </div>
        </div>
    );

}