import "../ArtikelCard/artikelCard.scss";

const articleAbout = [
    {
        title: "Zahnmedizin",
        image: "/src/assets/images/tiere/Katze-offener-Mund-SMALL.jpg",
        alt: "katze mit offenem mund",
        information:
            "Zahnschmerzen können uns Tiere leider nicht mitteilen.Allerdings können regelmäßige Prophilaxe, Plaquekontrollen als Vorsorgemaßnahme, Zahnerkrankungen und dadurch bedingte Folgeschäden weitesgehend vorgebeugt und zusätzlicher Stress für das Tier und Kosten minimiert werden. Ablagerungen an den Zähnen, unangenehmer Mundgeruch, stärkerer Speichelfluss als normal, schlechtere Kautätigkeit, sie Zahnfleischentzündungen, sind eindeutige Anzeichen für Zahnprobleme. Darauf folgen Parandontose, Karies und eventuell auch entzündungen, die bei Vernachlässigung dem gesamten Organismus schdaen können und Leber, Herz und Niere angreifen können.Entzündungen können als Folge von Zahnbelägen und Zahnstein (Beläge aus Bakterien, die durch Einlagerung von Mineralstoffen steinhart werden) entstehen und zusätzlich auch zu zahnverlust führen, bei unregelmäßger Kontrolle und Behandlung. Neben regelmäßgen tierärztlichen Kontrollen, können Sie ihrem Tier durch tägliche, gründliche Reinigung der Zähne mit speziellen Zahnbürsten (im Zoohandel/Tierbedarf), Zahnpasta oder auch Zahnreinigungsstreifen und entspechendem Trockenfutter, zu gesunden Zähnen verhelfen.",
    },
    {
        title: "Medikamentöse Kastration-Sicher, sanft und umkehrbar",
        image: "/src/assets/images/tiere/Hund-2-2.jpg",
        alt: "ernst guckender hund",
        information:
            "Für geschlechtsreife Rüden gibt es neben der chirurgischen, auch die medikamentöse Katsration. Durch ein subkutanes zu applizierendes(unter der Haut befindliches) Implantat, welches biokompatibel ist und somit nicht wieder entfernt werden muss, wird eine beispielweise sechminatige Kastration eingeleitet. Dies ist ebenfalls eine Möglichkeit, um sich die entgültige , dauerhafte Entscheidung der chirurgische Kastration zu erleichtern, sozusagen eine Probekatration.",
    },
    {
        title: "Wichtige Impfung für Kaninchen gegen Myxomatose, RHD und RHD2 /Chinaseuche (Rabbit Haemorrhagic Disease)",
        image: "/src/assets/images/tiere/Hase-Small.jpg",
        alt: "hase auf dickem ast",
        information:
            "Durch regelmäßge Impfungen, können Sie ihr Tier vor diesen gefährlichen Viruserkrankungen mit hoher Ausbreitungs- und Sterberate (80-100%) schützen. Das zur Familie der Pockenviren gehörende Myxomatosevirus kann z.B. durch Fliegen, Mücken, Kaninchenfloh, Milben, Zecken und Läuse, aber auch durch Futter , insbesondere gesammeltes Grünfutter, von Kaninchen zu Kaninchen oder von Mensch zu Kaninchen übertragen werden. Mögliche Krankheitszeichen/ Infektionsanzeichen: Schwellungen an den Augen, Augenausfluss, Ödeme, andere Infektionen. Später weitere Anschwellungen im Kopfbereich, Fieber und Ödembildung am ganzen Körper. Deshalb sollten grundsätzlich alle Tiere 2 x im Jahr geimpft werden. Im Idealfall impft man März/April. Der Impfschutz hält 6–9 Monate. So wie das Myxomatosevirus, wird auch das RHD Virus (Calicivirus) übertragen. Die inkubatioszeit beläuft sich bei 24-72 Stunden. Hauptüberträger sind Kaninchenflöhe, aber auch eine Tröpcheninfektion ist möglich. Mögliches Krankheitsbild: Akute Verlaufsform: Unruhe, Benommenheit, Atemnot, Flankenatmung, Fieber, Fressunlust und blutigem Durchfall. Quallvolles Ersticken ist meist die Folge. Perakute Verlaufsform: keine Krankheitsanzeichen, plötzliches Zusammenbrechen,heftige Atemnotkrämpfe und ersticken, meist mit weit zurückgebogenem Kopf und Blutaustritt aus den Nasenlöchern. Auch von Schreien und anderen Lauten wird berichtet. Die jährliche Impfung kann in Kombination mit Myxomatose oder erfolgen und sollte idealerweise vor der warmen Jahreszeit geschehen. Die Immunisierung hält 9 -12 Monate vor. Eine Grundimmunisierung emphiehlt sich bei Jungtieren (Erstimpfung bei Jungtieren ca. ab der 4. bis 6. Lebenswoche) und Tieren, die zum ersten Mal geimpft werden.",
    },
    {
        title: "Reptilien-Winterruhe",
        image: "/src/assets/images/tiere/chameleon.jpg",
        alt: "chameleon",
        information:
            "Um Ihre schuppigen Freunde ausreichend und sicher auf die Winterruhe/-starre vorzubereiten, sollten sie vorab tierärztlich untersucht und von eventuellen Parasitenbefall befreit werden. Der physiologische Lebensablauf des jeweiligen Tieres ist ausschlaggebend für die Winterruhe der Reptilien.",
    },
];

const ArtikelListObj = (props) => {
    return (
        <div className="article_cards">
            <p className="article_title">{props.article.title}</p>
            <img
                className="article_image"
                src={props.article.image}
                alt={props.article.alt}
            />
            <p>{props.article.information}</p>
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
