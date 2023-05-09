import { useContext } from "react";
import { PraxisContext } from "../../context/PraxisProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faCircleChevronRight,
    faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import NoImage from "/public/images/various/no-image.png";
<FontAwesomeIcon icon={faCircleChevronRight} />;
const GalleryContainer = ({ galerie, galleryId }) => {
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
            {openModal && activeGallery === galleryId && (
                <div className="modal-container">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close-modal-image"
                        onClick={handleCloseModal}
                    />
                    <FontAwesomeIcon
                        icon={faCircleChevronLeft}
                        className="prev-modal-image"
                        onClick={() => handlePrevSlide(galerie)}
                    />
                    <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        className="next-modal-image"
                        onClick={() => handleNextSlide(galerie)}
                    />
                    <div className="fullscreen-image-container">
                        <img
                            className="fullscreen-image"
                            src={
                                galerie[slidePosition].img
                                    ? galerie[slidePosition].img
                                    : NoImage
                            }
                            alt={
                                galerie[slidePosition].alt
                                    ? galerie[slidePosition].alt
                                    : "Kein Bild gefunden"
                            }
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
                                onClick={() =>
                                    handleOpenModal(index, galleryId)
                                }
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
