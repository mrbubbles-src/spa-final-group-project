import ArtikelCard from "../../components/ArtikelCard/ArtikelCard";

const Artikel = () => {
    return (
        <>
            <div className="text_container">
                <h2 className="sub-head">Wissenswertes</h2>
                <p className="paragraph">
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
                </p>
                <p className="paragraph">
                    Wichtige und nützliche Beiträge für Sie und Ihre Haustiere
                    finden Sie auf dieser Seite.
                </p>
                <p className="paragraph">
                    Wir sind stets engagiert neue, wichtige und spannende
                    Beiträge für Sie hier zusammenzutragen.
                </p>
                <p className="paragraph">
                    Für weitere spannende und nützliche Informationen schauen
                    Sie auch unter unserem Reiter
                    <a href="" className="site-links">
                        Links
                    </a>
                    .
                </p>
            </div>

            <ArtikelCard />
        </>
    );
};

export default Artikel;
