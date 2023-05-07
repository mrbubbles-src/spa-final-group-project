import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";

const Galerie = () => {
    return (
        <>
            <section className="galerie-container">
                <h2 className="galerie-sub-title sub-head">Galerie</h2>
                <h3 className="galerie-section-title">Unsere Patienten</h3>
                <GalleryContainer></GalleryContainer>
            </section>
            <section className="galerie-container">
                <h3 className="galerie-section-title">Unsere Praxis</h3>
                <GalleryContainer></GalleryContainer>
            </section>
        </>
    );
};

export default Galerie;
