import ArtikelCard from "../../components/ArtikelCard/ArtikelCard";
import AceHallo from "/public/images/tiere/ace_smoking_no_BG.png";

const Home = () => {
    return (
        <>
            <section className="welcome-section">
                <div className="text_container_top">
                    <div className="text_container">
                        <h2 className="sub-head">
                            Herzlich willkommen in unserer Tierarztpraxis!
                        </h2>
                        <p className="paragraph">
                            In unserer Praxis gehören Empathie und
                            überdurchschnittliches medizinisches Niveau
                            zusammen. Unser Hauptanliegen ist das Wohl des
                            Tieres, weshalb wir unnötige Untersuchungen und
                            somit unnötige Zusatzkosten und Stress des Tieres
                            vermeiden.
                            <br />
                            <br />
                            Damit Sie als Besitzer und Vertrauter ihrem
                            tierischen Begleiter bei der Genesung helfen können,
                            erklären wir Ihnen möglichst genau, das
                            Krankheitsbild, mit seinen Ursachen, Verlauf und die
                            benötigten Maßnahmen, um möglichst stressfrei und
                            erfolgreich zur Genesung beizutragen.
                            <br />
                            <br />
                            Bei weiteren Fragen oder Sorgen sprechen Sie uns
                            einfach an. Wir helfen Ihnen gerne weiter. <br />
                            <br />
                            Ihr Dr. Volker Gerlitzki und Team.
                        </p>
                    </div>
                    <div className="welcome-circle-picture">
                        <img className="welcome-image" src={AceHallo} />
                    </div>
                </div>
            </section>

            <h2 className="sub-head">Wissenswertes</h2>
            <ArtikelCard />
        </>
    );
};

export default Home;
