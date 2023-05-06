import ArtikelCard from "../../components/ArtikelCard/ArtikelCard";
import AceHallo from "/src/assets/images/tiere/ace_smoking_square.jpg";

const Home = () => {
    return (
        <>
            <section className="welcome">
                <h2 className="sub-head">
                    Herzlich Willkommen in unserer Tierarztpraxis!
                </h2>
                <p className="paragraph">
                    In unserer Praxis gehören Empathie und
                    überdurchschnittliches medizinisches Niveau zusammen. Unser
                    Hauptanliegen ist das Wohl des Tieres, weshalb wir unnötige
                    Untersuchungen und somit unnötige Zusatzkosten und Stress
                    des Tieres vermeiden.
                    <br />
                    <br />
                    Damit Sie als Besitzer und Vertrauter ihrem tierischen
                    Begleiter bei der Genesung helfen können, erklären wir Ihnen
                    möglichst genau, das Krankheitsbild, mit seinen Ursachen,
                    Verlauf und die benötigten Maßnahmen, um möglichst
                    stressfrei und erfolgreich zur Genesung beizutragen.
                    <br />
                    <br />
                    Bei weiteren Fragen oder Sorgen, sprechen Sie uns einfach
                    an. Wir helfen Ihnen gerne weiter. <br />
                    <br />
                    Ihr Dr. Volker Gerlitzki und Team.
                </p>
                <div className="welcome-circle-picture">
                    <img className="welcome-image" src={AceHallo} />
                </div>
            </section>

            <h2 className="sub-head">Wissenswertes</h2>
            <ArtikelCard />
        </>
    );
};

export default Home;
