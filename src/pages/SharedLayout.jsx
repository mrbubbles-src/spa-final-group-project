import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <main className="main-container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default SharedLayout;
