import Visitenkarte from "../../components/Visitenkarte/Visitenkarte";
import "./kontakt.scss";
import { contactObj } from "../../assets/dataArrays/kontakt";
import KontaktForm from "../../components/KontaktForm/KontaktForm";
const Kontakt = () => {
    return (
        <>
            <h2 className="sub-head">Kontakt</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.943016420752!2d10.215945112380163!3d53.48734796404859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1f2627d000499%3A0x74b29aef89ee5ba6!2sWentorfer%20Str.%2015%2C%2021029%20Hamburg!5e0!3m2!1sde!2sde!4v1683115069794!5m2!1sde!2sde"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
            <section className="card_section">
                <Visitenkarte />
                <div className="card-list">
                    {contactObj.map((obj, index) => (
                        <div className="cards contact_cards" key={index}>
                            <h3 className="cards_title">{obj.title}</h3>
                            <p className="center_text">{obj.text}</p>
                            {obj.subtitle && (
                                <h3 className="cards_title">{obj.subtitle}</h3>
                            )}
                            {obj.text2 && (
                                <p className="center_text">{obj.text2}</p>
                            )}
                            {obj.text3 && (
                                <p className="center_text">{obj.text3}</p>
                            )}
                            {obj.text4 && (
                                <p className="center_text">{obj.text4}</p>
                            )}
                            {obj.contact_link && (
                                <a
                                    className="site-links"
                                    href={obj.contact_link}
                                >
                                    www.hvv.de
                                </a>
                            )}
                            {obj.telephone_number && (
                                <p>
                                    Telefon:{" "}
                                    <a
                                        className="site-links"
                                        href={`tel:${obj.telephone_number}`}
                                    >
                                        {obj.telephone_number}
                                    </a>
                                </p>
                            )}
                            {obj.email && (
                                <p>
                                    E-Mail:{" "}
                                    <a
                                        className="site-links"
                                        href={`mailto:${obj.email}`}
                                    >
                                        {obj.email}
                                    </a>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <KontaktForm />
            </section>
        </>
    );
};

export default Kontakt;
