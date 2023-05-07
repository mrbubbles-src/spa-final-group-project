import Visitenkarte from "../../components/Visitenkarte/Visitenkarte";
import "./kontakt.scss";
const Kontakt = () => {
    return (
        <div className="kontakt_main kontakt-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.943016420752!2d10.215945112380163!3d53.48734796404859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1f2627d000499%3A0x74b29aef89ee5ba6!2sWentorfer%20Str.%2015%2C%2021029%20Hamburg!5e0!3m2!1sde!2sde!4v1683115069794!5m2!1sde!2sde"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            <section className="kontakt-info-container">
                <Visitenkarte />

                <article className="article_cards kontakt-info-karte">
                    <h3 className="kontakt-info-head">Mit dem Auto</h3>
                    <p className="kontakt-info-paragraph paragraph">
                        Gegenüber der Praxis befinden sich Parkplätze.
                    </p>
                    <h3 className="kontakt-info-head">
                        Behindertengerechter Zugang
                    </h3>
                    <p className="kontakt-info-paragraph paragraph">
                        Der Zugang für Rollstuhlfahrer befindet sich Wentorfer
                        Strasse 15a.
                    </p>
                    <p className="kontakt-info-paragraph paragraph">
                        Dieser ist durch den kleinen Weg rechts neben dem Haus
                        zu erreichen.
                    </p>
                </article>
                <article className="article_cards kontakt-info-karte">
                    <h3 className="kontakt-info-head">
                        Öffentliche Verkehrsmittel
                    </h3>
                    <p className="kontakt-info-paragraph paragraph">
                        Nuten Sie den öffentlichen Nahverkehr (
                        <a href="https://www.hvv.de/de/SteigEinBeimKlimaschutz">
                            www.hvv.de
                        </a>
                        )
                    </p>
                    <ul className="kontakt-info-list-container">
                        <li className="kontakt-info-listitem">
                            S-Bahn Linie S2 oder S21 bis Hamburg-Bergedorf.
                        </li>
                        <li className="kontakt-info-listitem">
                            Buslinie 235 bis Rathaus Bergedorf.
                        </li>
                        <li className="kontakt-info-listitem">
                            Von hier aus ca. 2 Minuten zu Fuß.
                        </li>
                    </ul>
                </article>
                <article className="article_cards kontakt-info-karte">
                    <span className="kontakt-info-warning">
                        <p className="kontakt-info-warning-paragraph paragraph">
                            Achtung:
                        </p>
                    </span>
                    <p className="kontakt-info-paragraph paragraph">
                        Bitte haben Sie Verständnis, dass wir telefonisch oder
                        per E-Mail keine Diagnosen stellen können.
                    </p>
                    <p className="kontakt-info-paragraph paragraph">
                        Im Krankheitsfall vereinbaren Sie bitte einen Termin
                        unter
                        <a href="tel:0407214244">040 / 721 4244</a>.
                    </p>
                    <p className="kontakt-info-paragraph paragraph">
                        Sie erreichen uns per E-Mail unter
                        <a href="mailto:praxis@vet-gerlitzki.de">
                            praxis@vet-gerlitzki.de
                        </a>
                    </p>
                </article>
                <article className="article_cards kontakt-info-karte">
                    <form
                        className="kontakt-info-form"
                        action="https://formspree.io/xoqkgnqo"
                        method="post"
                        id="login_form"
                    >
                        <legend className="kontakt-info-form-legend">
                            <h3 className="kontakt-info-head">
                                Kontaktieren Sie Uns
                            </h3>
                        </legend>
                        <fieldset className="inputs_container kontakt-info-form-fieldset">
                            <input
                                className="kontakt-info-form-input"
                                id="firstname"
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <input
                                className="kontakt-info-form-input"
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <label></label>
                            <textarea
                                className="kontakt-info-form-textarea"
                                name="message"
                                id="message"
                                cols="33"
                                rows="5"
                            ></textarea>
                        </fieldset>
                        <button className="kontakt-info-form-button">
                            Senden
                        </button>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Kontakt;
