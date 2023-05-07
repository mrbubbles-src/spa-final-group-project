import ArtikelCard from "../../components/ArtikelCard/ArtikelCard";
import CardContainer from "../../components/CardContainer/CardContainer";
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

            <h2 className="sub-head">Wissenswertes</h2>
            <CardContainer>
                <ArtikelCard />
            </CardContainer>
        </>
    );
};

export default Home;
