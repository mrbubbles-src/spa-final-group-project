import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";

const Navbar = () => {
    return (
        <nav className="navigation">
            <Menu />
            <ul className="nav-link-container">
                <li className="list-elements">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Startseite
                    </NavLink>
                </li>
                <li className="list-elements">
                    <NavLink
                        to="leistungen"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Leistungen
                    </NavLink>
                </li>
                <li className="list-elements">
                    <NavLink
                        to="artikel"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Artikel
                    </NavLink>
                </li>
                <li className="list-elements">
                    <NavLink
                        to="galerie"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Galerie
                    </NavLink>
                </li>
                <li className="list-elements">
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Über die Praxis
                    </NavLink>
                </li>
                <li className="list-elements">
                    <NavLink
                        to="kontakt"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Kontakt & Anfahrt
                    </NavLink>
                </li>
                <li className="list-elements">
                    <NavLink
                        to="links"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Links
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
