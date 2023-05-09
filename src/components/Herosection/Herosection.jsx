import { Link } from "react-router-dom";
import Logo from "/public/images/logo/logo_noname_alt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Herosection = () => {
    return (
        <>
            <header className="herosection">
                <div className="herosection-logo-container">
                    <Link className="herosection-logo-link" to="/">
                        <img
                            className="herosection-logo"
                            src={Logo}
                            alt="dr. Gerlitzki logo"
                        />
                    </Link>
                </div>
                <div className="herosection-header-container">
                    <h1 className="herosection-header-title main-title">
                        Tierarzpraxis Dr. med. vet. Volker R. Gerlitzki
                    </h1>
                    <h2 className="herosection-header-animals sub-head">
                        Kleintiere &middot; Heimtiere &middot; Reptilien
                        &middot; Vögel
                    </h2>
                    <h3 className="herosection-header-adress">
                        Wentorfer Straße 15 &middot; 21029 Hamburg &middot;
                        Telefon: 040 / 721 4244
                    </h3>
                </div>
                <div className="herosection-times-container">
                    <div className="herosection-gradient"></div>
                    <h4 className="herosection-times-title">
                        Unsere Sprechzeiten
                    </h4>
                    <table className="herosection-times-table">
                        <thead className="herosection-times-thead">
                            <tr className="herosection-times-table-row">
                                <th className="herosection-times-table-head">
                                    Mo
                                </th>
                                <th className="herosection-times-table-head">
                                    Di
                                </th>
                                <th className="herosection-times-table-head">
                                    Mi
                                </th>
                                <th className="herosection-times-table-head">
                                    Do
                                </th>
                                <th className="herosection-times-table-head">
                                    Fr
                                </th>
                            </tr>
                        </thead>
                        <tbody className="herosection-times-tbody">
                            <tr className="herosection-times-table-row">
                                <td className="herosection-times-table-data">
                                    10 - 12 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    10 - 12 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    10 - 12 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    10 - 12 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    10 - 12 Uhr
                                </td>
                            </tr>
                            <tr className="herosection-times-table-row">
                                <td className="herosection-times-table-data">
                                    16 - 19 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    16 - 19 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    Geschlossen
                                </td>
                                <td className="herosection-times-table-data">
                                    16 - 19 Uhr
                                </td>
                                <td className="herosection-times-table-data">
                                    16 - 19 Uhr
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="herosection-gradient"></div>
                </div>
            </header>
            <section className="herosection-contact">
                <a href="tel:+0407214244">
                    <FontAwesomeIcon
                        icon={faPhone}
                        className="herosection-contact-icons"
                    />
                </a>
                <a href="mailto:praxis@vet-gerlitzki.de">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="herosection-contact-icons"
                    />
                </a>
            </section>
        </>
    );
};

export default Herosection;
