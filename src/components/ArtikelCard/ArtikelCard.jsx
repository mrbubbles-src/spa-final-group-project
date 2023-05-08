import { articleAbout } from "../../assets/dataArrays/artikel";

const ArtikelListObj = (props) => {
    return (
        <div className="cards">
            <h3 className="cards_title">{props.article.title}</h3>
            <img
                className="cards_image"
                src={props.article.image}
                alt={props.article.alt}
            />
            <article>
                {props.article.information.split("\n").map((str, index) => (
                    <p key={index} className="paragraph artikel-paragraph">
                        {str}
                    </p>
                ))}
            </article>
        </div>
    );
};

const ArtikelCard = () => {
    return (
        <section className="article_cards_section">
            {articleAbout.map((article) => {
                return <ArtikelListObj article={article} key={article.title} />;
            })}
        </section>
    );
};

export default ArtikelCard;
