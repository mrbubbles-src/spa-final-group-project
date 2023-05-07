import { Link } from "react-router-dom";
import ArtikelCard from "../../components/ArtikelCard/ArtikelCard";

const Artikel = () => {
    return (
        <>
            <h2 className="sub-head">Wissenswertes</h2>
            <section className="articles-section">
                <p className="article-paragraph paragraph">
                    Aktuelle Giftköderwarnungen für Hamburg finden Sie auf
                    <a
                        href="https://dogorama.app/de-de/giftkoeder/Hamburg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-links"
                    >
                        {" "}
                        DOGORAMA
                    </a>
                    <br />
                    <br />
                    Wichtige und nützliche Beiträge für Sie und Ihre Haustiere
                    finden Sie auf dieser Seite.
                    <br />
                    <br />
                    Wir sind stets engagiert neue, wichtige und spannende
                    Beiträge für Sie hier zusammenzutragen.
                    <br />
                    <br />
                    Für weitere spannende und nützliche Informationen schauen
                    Sie auch unter unserem Reiter
                    <Link to="/links" className="site-links">
                        Links
                    </Link>
                    .
                </p>
            </section>

            <ArtikelCard />
        </>
    );
};

export default Artikel;
