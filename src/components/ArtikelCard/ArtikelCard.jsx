import "../ArtikelCard/artikelCard.scss";

const articleAbout = [
    {
        title: "Zahnmedizin",
        image: "/src/assets/images/tiere/Katze-offener-Mund-SMALL.jpg",
        information:
            "Zahnschmerzen können uns Tiere leider nicht mitteilen.Allerdings können regelmäßige Prophilaxe, Plaquekontrollen als Vorsorgemaßnahme, Zahnerkrankungen und dadurch bedingte Folgeschäden weitesgehend vorgebeugt und zusätzlicher Stress für das Tier und Kosten minimiert werden. Ablagerungen an den Zähnen, unangenehmer Mundgeruch, stärkerer Speichelfluss als normal, schlechtere Kautätigkeit, sie Zahnfleischentzündungen, sind eindeutige Anzeichen für Zahnprobleme. Darauf folgen Parandontose, Karies und eventuell auch entzündungen, die bei Vernachlässigung dem gesamten Organismus schdaen können und Leber, Herz und Niere angreifen können.Entzündungen können als Folge von Zahnbelägen und Zahnstein (Beläge aus Bakterien, die durch Einlagerung von Mineralstoffen steinhart werden) entstehen und zusätzlich auch zu zahnverlust führen, bei unregelmäßger Kontrolle und Behandlung. Neben regelmäßgen tierärztlichen Kontrollen, können Sie ihrem Tier durch tägliche, gründliche Reinigung der Zähne mit speziellen Zahnbürsten (im Zoohandel/Tierbedarf), Zahnpasta oder auch Zahnreinigungsstreifen und entspechendem Trockenfutter, zu gesunden Zähnen verhelfen.",
    },
    {
        title: "balaa",
        image: "/src/assets/images/tiere/Katze-offener-Mund-SMALL.jpg",
        information:
            "Zahnschmerzen können uns Tiere leider nicht mitteilen.Allerdings können regelmäßige Prophilaxe, Plaquekontrollen als Vorsorgemaßnahme, Zahnerkrankungen und dadurch bedingte Folgeschäden weitesgehend vorgebeugt und zusätzlicher Stress für das Tier und Kosten minimiert werden. Ablagerungen an den Zähnen, unangenehmer Mundgeruch, stärkerer Speichelfluss als normal, schlechtere Kautätigkeit, sie Zahnfleischentzündungen, sind eindeutige Anzeichen für Zahnprobleme. Darauf folgen Parandontose, Karies und eventuell auch entzündungen, die bei Vernachlässigung dem gesamten Organismus schdaen können und Leber, Herz und Niere angreifen können.Entzündungen können als Folge von Zahnbelägen und Zahnstein (Beläge aus Bakterien, die durch Einlagerung von Mineralstoffen steinhart werden) entstehen und zusätzlich auch zu zahnverlust führen, bei unregelmäßger Kontrolle und Behandlung. Neben regelmäßgen tierärztlichen Kontrollen, können Sie ihrem Tier durch tägliche, gründliche Reinigung der Zähne mit speziellen Zahnbürsten (im Zoohandel/Tierbedarf), Zahnpasta oder auch Zahnreinigungsstreifen und entspechendem Trockenfutter, zu gesunden Zähnen verhelfen.",
    },
];

const ArtikelListObj = (props) => {
    return (
        <div className="article_cards">
            <p>{props.article.title}</p>
            <img src={props.article.image} alt="katze" />
            <p>{props.article.information}</p>
        </div>
    );
};

const ArtikelCard = () => {
    return (
        <section>
            {articleAbout.map((article) => {
                return <ArtikelListObj article={article} key={article.title} />;
            })}
        </section>
    );
};

export default ArtikelCard;
