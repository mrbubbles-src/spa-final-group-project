import { useContext } from "react";
import { PraxisContext } from "../../context/PraxisProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import NoImage from "/src/assets/images/various/no-image.png";
// , praxisGalerie
const GalleryContainer = ({ galerie, id }) => {
    const {
        slidePosition,
        openModal,
        handleOpenModal,
        handleCloseModal,
        handlePrevSlide,
        handleNextSlide,
        activeGallery,
    } = useContext(PraxisContext);

    return (
        <>
            {openModal && activeGallery === id && (
                <div className="modal-container">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close-modal-image"
                        onClick={handleCloseModal}
                    />
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="prev-modal-image"
                        onClick={() => handlePrevSlide(galerie)}
                    />
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="next-modal-image"
                        onClick={() => handleNextSlide(galerie)}
                    />
                    <div className="fullscreen-image-container">
                        <img
                            className="fullscreen-image"
                            src={galerie[slidePosition].img}
                            alt={galerie[slidePosition].alt}
                        />
                    </div>
                </div>
            )}

            <div className="gallery-image-container">
                {galerie &&
                    galerie.map((currImage, index) => {
                        return (
                            <div
                                className="single-gallery-image-container"
                                key={index}
                                onClick={() => handleOpenModal(index, id)}
                            >
                                <img
                                    className="single-gallery-image"
                                    src={
                                        currImage.img ? currImage.img : NoImage
                                    }
                                    alt={
                                        currImage.alt
                                            ? currImage.alt
                                            : "Kein Bild gefunden"
                                    }
                                />
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default GalleryContainer;
