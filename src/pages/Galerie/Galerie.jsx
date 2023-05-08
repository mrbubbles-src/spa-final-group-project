import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";
import { tiere } from "../../assets/imageArrays/galerieBilderTiere";
import { praxis } from "../../assets/imageArrays/galerieBilderPraxis";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Galerie = () => {
    const praxisLocation = useLocation();
    useEffect(() => {
        if (praxisLocation.hash) {
            const praxisSection = document.querySelector(praxisLocation.hash);
            if (praxisSection) {
                praxisSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [praxisLocation]);

    return (
        <>
            <h2 className="galerie-sub-title sub-head">Galerie</h2>
            <section className="galerie-container">
                <h3 className="galerie-section-title">Unsere Patienten</h3>
                <GalleryContainer galerie={tiere} galleryId="tiere" />
            </section>
            <section className="galerie-container" id="praxis-gal">
                <h3 className="galerie-section-title">Unsere Praxis</h3>
                <GalleryContainer galerie={praxis} galleryId="praxis" />
            </section>
        </>
    );
};

export default Galerie;
