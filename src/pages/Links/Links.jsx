// import React from 'react';

const Links = () => {
    return (
        <>
            <section className="links-section-container">
                <h2 className="links-section-sub-head sub-head">Links</h2>

                <p className="links-section-paragraph paragraph">
                    Hier haben wir einige informative Links in alphabetischer
                    Reihenfolge für Sie zusammengestellt.
                </p>
                <div className="links-container">
                    <ul className="links-section-list-container">
                        <li className="links-section-listitem informationen-liste">
                            <a
                                href="https://www.dght.de/startseite"
                                className="links-section-link site-links"
                            >
                                Deutschen Gesellschaft für Herpetologie und
                                Terrarienkunde (DGHT)
                            </a>
                            Die Website der Deutschen Gesellschaft für
                            Herpetologie und Terrarienkunde
                        </li>
                        <li className="links-section-listitem informationen-liste">
                            <a
                                href="https://www.bundestieraerztekammer.de/tieraerzte/beruf/got/"
                                className="links-section-link site-links"
                            >
                                GOT
                            </a>
                            Gebührenordnung für Tierärzte
                        </li>
                        <li className="links-section-listitem informationen-liste">
                            <a
                                href="http://www.terrarien-freunde-hamburg.de/"
                                className="links-section-link site-links"
                            >
                                Terrarienfreunde Hamburg
                            </a>
                            Die Website der Terrarienfreunde Hamburg
                        </li>
                        <li className="links-section-listitem informationen-liste">
                            <a
                                href="https://www.tasso.net/"
                                className="links-section-link site-links"
                            >
                                Tiernotruf.org
                            </a>
                            Die Website von TASSO e.V.
                        </li>
                        <li className="links-section-listitem informationen-liste">
                            <a
                                href="http://www.tierschutzbund.de/00524.html"
                                className="links-section-link site-links"
                            >
                                Tierschutzbund
                            </a>
                            Die Website des Deutschen Tierschutzbundes e.V
                        </li>
                        <li className="links-section-listitem informationen-liste">
                            <a href="https://www.agila.de/?VermittlerID=11&gclid=Cj0KCQiA1sucBhDgARIsAFoytUtaV3FPyB5cAf9xXKu7m32abyoYxq0VWqoM3iraqP9b34WgCtdtj6QaAkk6EALw_wcB">
                                Tierversicherung
                            </a>
                            AGILA
                        </li>
                        <li className="links-section-listitem informationen-liste">
                            <a
                                href="https://www.comfortplan.de/"
                                className="links-section-link site-links"
                            >
                                Tierversicherung Versicherungsvergleich
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Links;
