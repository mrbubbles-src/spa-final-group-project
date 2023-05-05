import VolkerGerlitzki from "../../assets/images/aerzte/volkerg.jpeg";
import BirgitJoswig from "../../assets/images/aerzte/birgit-5d30482f.jpg";

const Praxis = () => {
    return (
        <>
            <h2 className="praxis-sub-head sub-head">Über die Praxis</h2>
            <section className="praxis-section-container information">
                <article className="praxis-card article_cards">
                    <div className="praxis-image-container image-container">
                        <img
                            className="praxis-image"
                            src={VolkerGerlitzki}
                            alt="Tierarzt Dr. Volker Robert Gerlitzki"
                        />
                    </div>
                    <h3 className="praxis-card-head">
                        Tierarzt Dr. Volker Robert Gerlitzki
                    </h3>
                    <p>
                        Von 1983 bis 1989 hat Dr. Gerlitzki Tiermedizin an der
                        Tierärztlichen Hochschule in Hannover studiert und
                        begleitend in den verschiedenen Kliniken an der
                        Hochschule, z.B. in der Vogelklinik, der Heimtierklinik,
                        und der Klinik für kleine Haustiere gearbeitet. Nach
                        seiner Approbation 1989 war er vielfach als
                        Stellvertreter für verschiedene Kleintierpraxen rund um
                        Hannover sowie als Klinikreferent tätig.
                    </p>
                    <p>
                        Seine erste eigene Praxis eröffnete er Ende 1993 in Form
                        einer Gemeinschaftspraxis mit Schwerpunkten in den
                        Bereichen Kleintiere und Pferde. 1996 promovierte Dr.
                        Gerlitzki zum Thema Insektengifte. Anschließend übernahm
                        er eine bestehende Kleintierpraxis in Hamburg Bergedorf.
                    </p>
                    <p>
                        Neben seiner Praxistätigkeit betreut der Tierarzt die
                        Sporthundevereine in Geesthacht und Trittau.
                    </p>
                    <p>
                        Sozial engagiert sich Dr. Gerlitzki im Verein (Tierärzte
                        ohne Grenzen) e.V. Durch das Elend der wilden Hunde und
                        Katzen auf Rhodos stark beeindruckt engagiert er sich
                        seit 2011 intensiv im RAWS, dem Tierschutzverein Rhodos
                        und arbeitet ehrenamtlich auch direkt vor Ort als
                        Tierarzt. Weiterhin ist er im Vorstand der Lehmann
                        Stiftung für das Miteinander von Mensch, Tier und Natur
                        tätig.
                    </p>
                </article>
                <article className="praxis-card article_cards">
                    <div className="praxis-image-container image-container">
                        <img
                            className="praxis-image"
                            src={BirgitJoswig}
                            alt="Tierärztin Dr. Birgit Joswig"
                        />
                    </div>
                    <h3 className="praxis-card-head">
                        Tierärztin Dr. Birgit Joswig
                    </h3>
                    <ul className="praxis-list-container">
                        <li className="praxis-list-item">Geb.: 04.09.1966</li>
                        <li className="praxis-list-item">Approbation: 1993</li>
                        <li className="praxis-list-item">Promotion: 1995</li>
                    </ul>
                    <p className="praxis-paragraph paragraph">
                        Von 2000 bis 2009 führte Sie eine eigene Praxis in
                        Vierlanden. Seit 2009 ist Sie für die pharmazeutische
                        Industrie in der vorklinischen und klinischen Forschung
                        tätig sowie feste Mitarbeiterin der Tierarztpraxis Dr.
                        Gerlitzki . In mehreren lokalen Vereinen tätig kümmert
                        Sie sich ebenfalls um Ihren beachtlichen Tierbestand.
                    </p>
                </article>
            </section>

            {/* <section className="welcome">
                <div className="text_container_top">
                    <div className="text_container praxis-text">
                        <h2 className="praxis-sub-head sub-head">
                            Unsere Räumlichkeiten
                        </h2>
                        <p className="praxis-paragraph paragraph">
                            Hier sehen Sie einen kleinen Vorgeschmack auf unsere
                            Räumlichkeiten.
                        </p>
                        <p className="praxis-paragraph paragraph">
                            Für mehr Bilder, besuchen Sie doch unsere
                            <Link to="/galerie">Galerie</Link>
                        </p>
                    </div>
                </div>
            <section className="galerie-container">
                    <div className="galerie-item">
                        <a
                        className=""
                            href="../images/praxis_außen3.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/praxis_außen3.jpg"
                                alt="praxis von außen"
                            />
                        </a>
                    </div>
                    <div className="galerie-item">
                        <a
                            href="../images/praxis_raeume6.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../images/praxis_raeume6.jpg"
                                alt="empfangsbereich"
                            />
                        </a>
                    </div>
                </section>
            </section> */}
        </>
    );
};

export default Praxis;
