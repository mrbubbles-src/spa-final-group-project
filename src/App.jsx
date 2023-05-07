import { BrowserRouter, Route, Routes } from "react-router-dom";
import PraxisProvider from "./context/PraxisProvider";
// styling
import "./components/Navbar/nav.scss";
import "./components/Herosection/herosection.scss";
import "./components/CardContainer/cardContainer.scss";
import "./components/ArtikelCard/artikelCard.scss";
import "./components/Footer/footer.scss";
import "./components/Visitenkarte/visitenkarte.scss";
import "./pages/Home/home.scss";
import "./pages/Leistungen/leistungen.scss";
import "./pages/Artikel/artikel.scss";
import "./pages/Galerie/galerie.scss";
import "./pages/Praxis/praxis.scss";
import "./pages/Kontakt/kontakt.scss";
import "./pages/Links/links.scss";
import "./pages/Impressum/impressum.scss";
import "./pages/DataProtection/dataProtection.scss";
import "./pages/NotFound/notFound.scss";
import "./scss/app.scss";
// pages
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Leistungen from "./pages/Leistungen/Leistungen";
import Artikel from "./pages/Artikel/Artikel";
import Galerie from "./pages/Galerie/Galerie";
import Praxis from "./pages/Praxis/Praxis";
import Kontakt from "./pages/Kontakt/Kontakt";
import Links from "./pages/Links/Links";
import Impressum from "./pages/Impressum/Impressum";
import DataProtection from "./pages/DataProtection/DataProtection";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <PraxisProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/artikel" element={<Artikel />} />
                        <Route path="galerie" element={<Galerie />} />
                        <Route path="praxis" element={<Praxis />} />
                        <Route path="kontakt" element={<Kontakt />} />
                        <Route path="impressum" element={<Impressum />} />
                        <Route
                            path="dataprotection"
                            element={<DataProtection />}
                        />
                        <Route path="links" element={<Links />} />
                        <Route path="leistungen" element={<Leistungen />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PraxisProvider>
    );
}

export default App;
