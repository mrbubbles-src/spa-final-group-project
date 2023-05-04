import Visitenkarte from "../../components/Visitenkarte/Visitenkarte";
import "./kontakt.scss";
const Kontakt = () => {
    return (
        <div className='kontakt_main'>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.943016420752!2d10.215945112380163!3d53.48734796404859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1f2627d000499%3A0x74b29aef89ee5ba6!2sWentorfer%20Str.%2015%2C%2021029%20Hamburg!5e0!3m2!1sde!2sde!4v1683115069794!5m2!1sde!2sde'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowfullscreen=''
                loading='lazy'
            ></iframe>
            <section>
                <Visitenkarte />

                <article className='article_cards'>
                    <h3>Mit dem Auto</h3>
                    <p>Gegenüber der Praxis befinden sich Parkplätze.</p>
                    <h3>Behindertengerechter Zugang</h3>
                    <p>
                        Der Zugang für Rollstuhlfahrer befindet sich Wentorfer
                        Strasse 15a.
                    </p>
                    <p>
                        Dieser ist durch den kleinen Weg rechts neben dem Haus
                        zu erreichen.
                    </p>
                </article>
                <article className='article_cards'>
                    <h3>Öffentliche Verkehrsmittel</h3>
                    <p>
                        Nuten Sie den öffentlichen Nahverkehr (
                        <a href='https://www.hvv.de/de/SteigEinBeimKlimaschutz'>
                            www.hvv.de
                        </a>
                        )
                    </p>
                    <ul>
                        <li>S-Bahn Linie S2 oder S21 bis Hamburg-Bergedorf.</li>
                        <li>Buslinie 235 bis Rathaus Bergedorf.</li>
                        <li>Von hier aus ca. 2 Minuten zu Fuß.</li>
                    </ul>
                </article>
                <article className='article_cards'>
                    <span>
                        <p>Achtung:</p>
                    </span>
                    <p>
                        Bitte haben Sie Verständnis, dass wir telefonisch oder
                        per E-Mail keine Diagnosen stellen können.
                    </p>
                    <p>
                        Im Krankheitsfall vereinbaren Sie bitte einen Termin
                        unter
                        <a href='tel:0407214244'>040 / 721 4244</a>.
                    </p>
                    <p>
                        Sie erreichen uns per E-Mail unter
                        <a href='mailto:praxis@vet-gerlitzki.de'>
                            praxis@vet-gerlitzki.de
                        </a>
                    </p>
                </article>
                <article className='article_cards'>
                    <form
                        action='https://formspree.io/xoqkgnqo'
                        method='post'
                        id='login_form'
                    >
                        <legend>
                            <h3>Kontaktieren Sie Uns</h3>
                        </legend>
                        <fieldset className='inputs_container'>
                            <input
                                id='firstname'
                                type='text'
                                placeholder='Name'
                                required
                            />
                            <input
                                id='email'
                                type='email'
                                placeholder='Email'
                                required
                            />
                            <label></label>
                            <textarea
                                name='message'
                                id='message'
                                cols='33'
                                rows='5'
                            ></textarea>
                        </fieldset>
                        <button>Senden</button>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Kontakt;
