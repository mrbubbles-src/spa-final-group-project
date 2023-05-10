import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p className="footer_copy paragraph">
                &copy; 2023 Dr. med. vet. Gerlitzki
            </p>
            <div className="footer_links">
                <Link to="/impressum" className="site-links">
                    Impressum
                </Link>{" "}
                <Link to="/dataprotection" className="site-links">
                    Datenschutz
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
