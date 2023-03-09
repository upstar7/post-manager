import React, { useState } from "react";
import "./style.css";

const LDButton = () => {
    const [likeCount, setLikeCount] = useState(50);
    const [dislikeCount, setDislikeCount] = useState(25);

    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === "like") {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === "dislike") {
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
            setDislikeCount(dislikeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
        }
    };

    return (
        <div className="container">
            <div className="btn-container">
                <button
                    className={`btn like-btn ${
                        activeBtn === "like" ? "like-active" : ""
                    }`}
                    onClick={handleLikeClick}
                >
                    <i className="fa fa-thumbs-o-up fa-2x"></i>
                    {likeCount}
                </button>

                <button
                    className={`btn dislike-btn ${
                        activeBtn === "dislike" ? "dislike-active" : ""
                    }`}
                    onClick={handleDisikeClick}
                >
                    <i className="fa fa-thumbs-o-down fa-2x"></i>
                    {dislikeCount}
                </button>
            </div>
        </div>
    );
};

export default LDButton;
