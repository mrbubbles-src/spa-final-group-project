import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p className="footer_copy paragraph">
                &copy; 2023 Dr.med.vet. Gerlitzki
            </p>
            <div className="footer_links">
                <Link to="/impressum">Impressum</Link>{" "}
                <Link to="/dataprotection">Datenschutz</Link>
            </div>
        </footer>
    );
};

export default Footer;
