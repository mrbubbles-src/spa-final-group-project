import { useState } from "react";

const ReadMore = ({ limit, children }) => {
    const [readMore, setReadMore] = useState(false);
    const toggleBtn = () => {
        setReadMore((prevState) => !prevState);
    };
    return (
        <span>
            {readMore ? children : children.substr(0, limit)}
            <button className="toggleReadMore" onClick={toggleBtn}>
                {readMore ? "Read More" : "...ReadMore"}{" "}
            </button>
        </span>
    );
};

export default ReadMore;
