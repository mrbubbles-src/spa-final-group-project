// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faTwitter,
//     faInstagram,
//     faFacebook,
// } from "@fortawesome/free-brands-svg-icons";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            {/* <div className="footer_icons">
                <FontAwesomeIcon className="icons" icon={faTwitter} />
                <FontAwesomeIcon className="icons" icon={faInstagram} />
                <FontAwesomeIcon className="icons" icon={faFacebook} />
            </div> */}
            <p className="footer_copy">&copy; 2023 Dr.med.vet. Gerlitzki</p>
            <div className="footer_links">
                <Link to="/impressum">Impressum</Link>{" "}
                <Link to="/dataprotection">Datenschutz</Link>
            </div>
        </footer>
    );
};

export default Footer;
