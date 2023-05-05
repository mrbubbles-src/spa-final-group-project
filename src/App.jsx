import { BrowserRouter, Route, Routes } from "react-router-dom";
import PraxisProvider from "./context/PraxisProvider";
import "./scss/app.scss";
import "./pages/Galerie/galerie.scss";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Artikel from "./pages/Artikel/Artikel";
import NotFound from "./pages/NotFound/NotFound";
// import ArtikelCard from "./components/ArtikelCard/ArtikelCard";
import Kontakt from "./pages/Kontakt/Kontakt";
import Impressum from "./pages/Impressum/Impressum";
import DataProtection from "./pages/DataProtection/DataProtection";
import Galerie from "./pages/Galerie/Galerie";
import "./pages/Home/home.scss";
import Leistungen from "./pages/Leistungen/Leistungen";

function App() {
    return (
        <PraxisProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        {/* AN DIESER STELLE ZWISCHEN HOME UND NOTFOUND DIE ANDEREN ROUTEN ZU DEN SEITEN EINFÜGEN! */}
                        <Route path="/artikel" element={<Artikel />} />
                        <Route path="galerie" element={<Galerie />} />
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
