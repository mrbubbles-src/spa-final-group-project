import { Link } from "react-router-dom";
import { leistungen } from "../../assets/dataArrays/leistungen";
import { links } from "../../assets/dataArrays/links";

const Leistungen = () => {
    return (
        <>
            <section className="services-container">
                <h2 className="service-section-sub-head sub-head">
                    Leistungen
                </h2>
                <section className="service-section-container">
                    {leistungen.map((leistung, index) => {
                        return (
                            <div className="cards" key={index}>
                                <h3 className="cards_title">
                                    {leistung.title}
                                </h3>
                                <ul className="sevices-list-container">
                                    {Object.values(leistung)
                                        .slice(1)
                                        .map((item, index) => (
                                            <li
                                                className="services-list-item"
                                                key={index}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        );
                    })}
                </section>

                <h2 className="links-section-sub-head sub-head">Links</h2>
                <section className="links-section-container">
                    <div className="cards">
                        <p className="links-section-paragraph paragraph">
                            Hier haben wir einige informative Links in für Sie
                            zusammengestellt.
                        </p>
                        <ul className="links-section-list-container">
                            {links.map((link, index) => {
                                return (
                                    <li
                                        className="services-links-list-item"
                                        key={index}
                                    >
                                        <Link
                                            className="site-links"
                                            to={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.linkText}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Leistungen;
