import { Link } from "react-router-dom";
import AceHallo from "/public/images/tiere/ace_smoking_no_BG.png";
const NotFound = () => {
    return (
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
