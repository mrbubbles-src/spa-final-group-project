import CardContainer from "../../components/CardContainer/CardContainer";
import ArtikelCard from "../../components/ArtikelCard/ArtikelCard";

const Artikel = () => {
    return (
        <>
            <div className="text_container">
                <h2 id="mid_head">Wissenswertes</h2>
                <p>
                    Aktuelle Giftköderwarnungen für Hamburg finden Sie auf
                    <a
                        href="https://dogorama.app/de-de/giftkoeder/Hamburg/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        DOGORAMA
                    </a>
                </p>
                <p>
                    Wichtige und nützliche Beiträge für Sie und Ihre Haustiere
                    finden Sie auf dieser Seite.
                </p>
                <p>
                    Wir sind stets engagiert neue, wichtige und spannende
                    Beiträge für Sie hier zusammenzutragen.
                </p>
                <p>
                    Für weitere spannende und nützliche Informationen schauen
                    Sie auch unter unserem Reiter
                    <a href="">Links</a>.
                </p>
            </div>

            <CardContainer>
                <ArtikelCard />
            </CardContainer>
        </>
    );
};

export default Artikel;
