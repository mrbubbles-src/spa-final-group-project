import { BrowserRouter, Route, Routes } from "react-router-dom";
import PraxisProvider from "./context/PraxisProvider";
import "./scss/app.scss";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Kontakt from "./pages/Kontakt/Kontakt";

function App() {
    return (
        <PraxisProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        {/* AN DIESER STELLE ZWISCHEN HOME UND NOTFOUND DIE ANDEREN ROUTEN ZU DEN SEITEN EINFÜGEN! */}
                        <Route
                            path='kontakt'
                            element={<Kontakt />}
                        />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PraxisProvider>
    );
}

export default App;
