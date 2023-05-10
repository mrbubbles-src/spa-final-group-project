import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Herosection from "../components/Herosection/Herosection";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Herosection />
            <main className="main-container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default SharedLayout;
