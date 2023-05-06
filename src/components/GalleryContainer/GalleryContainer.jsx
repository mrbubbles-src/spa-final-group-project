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
const GalleryContainer = ({ tierGalerie }) => {
    const {
        slidePosition,
        openModal,
        handleOpenModal,
        handleCloseModal,
        handlePrevSlide,
        handleNextSlide,
    } = useContext(PraxisContext);

    return (
        <>
            {openModal && (
                <div className="modal-container">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close-modal-image"
                        onClick={handleCloseModal}
                    />
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="prev-modal-image"
                        onClick={() => handlePrevSlide(tierGalerie)}
                    />
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="next-modal-image"
                        onClick={() => handleNextSlide(tierGalerie)}
                    />
                    <div className="fullscreen-image-container">
                        <img
                            className="fullscreen-image"
                            src={tierGalerie[slidePosition].img}
                            alt={tierGalerie[slidePosition].alt}
                        />
                    </div>
                </div>
            )}

            <div className="gallery-image-container">
                {tierGalerie &&
                    tierGalerie.map((currImage, index) => {
                        return (
                            <div
                                className="single-gallery-image-container"
                                key={index}
                                onClick={() => handleOpenModal(index)}
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
