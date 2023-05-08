import { Link } from "react-router-dom";
import AceHallo from "/src/assets/images/tiere/ace_smoking_no_BG.png";
const NotFound = () => {
    return (
        // <>
        //     <h2>SYSTEM - ERROR</h2>
        //     <p>Seite konnte nicht Gefunden werden!</p>

        //     <Link to="/">Home</Link>
        //     <Link to="/praxis">Praxis</Link>
        //     <Link to="/kontakt">Kontakt</Link>
        // </>
        <div className="center">
            <div className="error">
                <div className="number">4</div>
                <div className="illustration">
                    <div className="circle">
                        <div className="not-found-image-container">
                            <img
                                className="not-found-image"
                                src={AceHallo}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="number">4</div>
            </div>

            <div className="text">
                <h2 className="sub-head">
                    Seite konnte nicht Gefunden werden!
                </h2>
            </div>
            <Link to="/" className="button">
                Zurück zur Startseite
            </Link>
        </div>
    );
};

export default NotFound;
