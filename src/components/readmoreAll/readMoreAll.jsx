import React, { useState } from "react";
import ReadMore from "../ReadMore/ReadMore";
const ReadMoreAll = ({ data }) => {
    const [readMore, setReadMore] = useState(false);
    const toggleBtn = () => {
        setReadMore((prevState) => !prevState);
    };
    return (
        <section className="hello">
            {data.map((str, index) => (
                <p key={index} className="paragraph artikel-paragraph">
                    <span>{readMore ? str : str.substr(0, limit)}</span>;
                </p>
            ))}
            <button className="toggleReadMore site-links" onClick={toggleBtn}>
                {readMore ? "read less..." : "...read more"}{" "}
            </button>
        </section>
    );
};

export default ReadMoreAll;
