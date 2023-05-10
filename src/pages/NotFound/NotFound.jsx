import { Link } from "react-router-dom";
import AceHallo from "/images/tiere/ace_smoking_no_BG.png";
const NotFound = () => {
    return (
        <>
            <div className="four-oh-four-container">
                <div className="four-oh-four">
                    <p className="ze-viers">4</p>
                    <div className="not-found-image-container">
                        <img
                            className="not-found-image"
                            src={AceHallo}
                            alt=""
                        />
                    </div>
                    <p className="ze-viers ze-second-vier">4</p>
                </div>
                <h2 className="sub-head">
                    Die Seite konnte nicht gefunden werden!
                </h2>
                <Link to="/" className="site-links">
                    Zurück zur Startseite
                </Link>
            </div>
        </>
    );
};

export default NotFound;
