import { BrowserRouter, Route, Routes } from "react-router-dom";
import PraxisProvider from "./context/PraxisProvider";
import "./components/Navbar/nav.scss";
import "./components/Herosection/herosection.scss";
import "./components/GalleryContainer/gallerycontainer.scss";
import "./components/Visitenkarte/visitenkarte.scss";
import "./components/ReadMore/readMore.scss";
import "./pages/Home/home.scss";
import "./pages/Leistungen/leistungen.scss";
import "./pages/Praxis/praxis.scss";
import "./pages/Kontakt/kontakt.scss";
import "./pages/Impressum/impressum.scss";
import "./pages/DataProtection/dataProtection.scss";
import "./pages/NotFound/notFound.scss";
import "./scss/app.scss";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Leistungen from "./pages/Leistungen/Leistungen";
import Galerie from "./pages/Galerie/Galerie";
import Praxis from "./pages/Praxis/Praxis";
import Kontakt from "./pages/Kontakt/Kontakt";
import Impressum from "./pages/Impressum/Impressum";
import DataProtection from "./pages/DataProtection/DataProtection";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
    return (
        <PraxisProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="galerie" element={<Galerie />} />
                        <Route path="praxis" element={<Praxis />} />
                        <Route path="kontakt" element={<Kontakt />} />
                        <Route path="impressum" element={<Impressum />} />
                        <Route
                            path="dataprotection"
                            element={<DataProtection />}
                        />
                        <Route path="leistungen" element={<Leistungen />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PraxisProvider>
    );
}

export default App;
