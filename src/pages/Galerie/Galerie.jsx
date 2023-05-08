import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";
import { tiere } from "../../assets/imageArrays/galerieBilderTiere";
import { praxis } from "../../assets/imageArrays/galerieBilderPraxis";

const Galerie = () => {
    return (
        <>
            <section className="galerie-container">
                <h2 className="galerie-sub-title sub-head">Galerie</h2>
                <h3 className="galerie-section-title">Unsere Patienten</h3>
                <GalleryContainer galerie={tiere} id="tiere" />
            </section>
            <section className="galerie-container">
                <h3 className="galerie-section-title">Unsere Praxis</h3>
                <GalleryContainer galerie={praxis} id="praxis" />
            </section>
        </>
    );
};

export default Galerie;
