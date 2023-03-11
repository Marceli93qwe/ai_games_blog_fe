import React, {useEffect, useState} from "react";
import "./BlogSite.css"
import {BlogPost} from "./BlogPost";
import {Review_Record} from "types";

export const BlogSite = () => {
    const [reviewsList, setReviewsList] = useState<Review_Record[] | null>(null);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/review");
            setReviewsList(await response.json());
        })()
    }, [])
    return (
        <div className="container">
            <h2>Posts </h2>
            {
                reviewsList ?
                    reviewsList.map(review => <BlogPost key={review.id} review={review}/>) :
                    "LOADING..."
            }
        </div>
    )
}