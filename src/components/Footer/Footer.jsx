import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer_icons">
                <FontAwesomeIcon className="icons" icon={faTwitter} />
                <FontAwesomeIcon className="icons" icon={faInstagram} />
                <FontAwesomeIcon className="icons" icon={faFacebook} />
            </div>
            <p className="footer_copy">&copy; 2023 Dr.med.vet. Gerlitzki</p>
            {/* <div className="footer_links">
                <Link to="/impressum">Impressum</Link>
                <Link to="/datenschutz">Datenschutz</Link>
                <Link to="#">Cookie-Einstellungen anpassen</Link>
            </div> */}
        </footer>
    );
};

export default Footer;

{
    /* <footer>
            <div class="footer_icons">
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-facebook"></i>
            </div>
            <p class="footer_copy">&copy; 2022 Dr. med. vet. Gerlitzki</p>
            <div class="footer_links">
                <a href="./pages/impressum.html">Impressum</a>
                <a href="./pages/datenschutz.html">Datenschutz</a>
                <a href="#">Cookie-Einstellungen anpassen</a>
            </div>
        </footer> */
}
