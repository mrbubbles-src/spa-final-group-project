import AceHallo from "/src/assets/images/tiere/ace_smoking_square.jpg";

const Home = () => {
    return (
        <>
            <section className="welcome">
                <div className="text_container_top">
                    <div className="text_container">
                        <h2 className="sub-head">
                            Herzlich Willkommen in unserer Tierarztpraxis!
                        </h2>
                        <p className="paragraph">
                            In unserer Praxis gehören Empathie und
                            überdurchschnittliches medizinisches Niveau
                            zusammen. Unser Hauptanliegen ist das Wohl des
                            Tieres, weshalb wir unnötige Untersuchungen und
                            somit unnötige Zusatzkosten und Stress des Tieres
                            vermeiden.
                        </p>
                        <p className="paragraph">
                            Damit Sie als Besitzer und Vertrauter ihrem
                            tierischen Begleiter bei der Genesung helfen können,
                            erklären wir Ihnen möglichst genau, das
                            Krankheitsbild, mit seinen Ursachen, Verlauf und die
                            benötigten Maßnahmen, um möglichst stressfrei und
                            erfolgreich zur Genesung beizutragen.
                            <br />
                            <br />
                            Bei weiteren Fragen oder Sorgen, sprechen Sie uns
                            einfach an. Wir helfen Ihnen gerne weiter. <br />
                            <br />
                            Ihr Dr. Volker Gerlitzki und Team.
                        </p>
                    </div>
                    <div className="circle">
                        <img src={AceHallo} />
                    </div>
                </div>
            </section>
            {/* <!-- CORONA -->
            <section className="warning">
                <h2>Aktuelle Corona Informationen:</h2>
                <p>
                    In unserer Praxis besteht weiterhin eine Maskenpflicht.
                    Vereinbaren Sie bitte einen Termin und erscheinen Sie mit
                    ihrem Tier möglichst alleine zu der Behandlung.
                </p>
                <p>Vielen Dank für ihr Verständnis und Mithilfe!</p>
            </section> */}
            {/* <!-- ARTICLE --> */}
            <h2 className="sub-head">Wissenswertes</h2>
            <section className="information">
                <article className="article_cards">
                    <div className="image-container">
                        <img
                            src="./images/Katze-offener-Mund-SMALL.jpg"
                            alt="katze mit offenem mund"
                        />
                    </div>
                    <div className="gradient"></div>

                    <h3>Zahnmedizin</h3>
                    <p className="paragraph">
                        Zahnschmerzen können uns Tiere leider nicht mitteilen.
                        Allerdings können regelmäßige Prophilaxe,
                        Plaquekontrollen als Vorsorgemaßnahme, Zahnerkrankungen
                        und dadurch bedingte Folgeschäden weitesgehend
                        vorgebeugt und zusätzlicher Stress für das Tier und
                        Kosten minimiert werden.
                        <a
                            className="site-links"
                            href="./pages/zahnmedizin.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Weiterlesen
                        </a>
                    </p>
                </article>
                <article className="article_cards">
                    <div className="image-container">
                        <img
                            src="./images/Hund-2-2.jpg"
                            alt="ernst guckender hund"
                        />
                    </div>
                    <div className="gradient"></div>

                    <h3>
                        Medikamentöse Kastration-Sicher, sanft und umkehrbar
                    </h3>
                    <p className="paragraph">
                        Für geschlechtsreife Rüden gibt es neben der
                        chirurgischen, auch die medikamentöse Kastration.
                        <a
                            className="site-links"
                            href="./pages/kastration.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Weiterlesen
                        </a>
                    </p>
                </article>
                <article className="article_cards">
                    <div className="image-container">
                        <img
                            src="./images/Hase-Small.jpg"
                            alt="hase auf dickem ast"
                        />
                    </div>
                    <div className="gradient"></div>

                    <h3>
                        Wichtige Impfung für Kaninchen gegen Myxomatose, RHD und
                        RHD2 /Chinaseuche (Rabbit Haemorrhagic Disease)
                    </h3>
                    <p className="paragraph">
                        Durch regelmäßge Impfungen, können Sie ihr Tier vor
                        diesen gefährlichen Viruserkrankungen mit hoher
                        Ausbreitungs- und Sterberate (80-100%) schützen.
                        <a
                            className="site-links"
                            href="./pages/impfung.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Weiterlesen
                        </a>
                    </p>
                </article>
            </section>
        </>
    );
};

export default Home;
