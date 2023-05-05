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
            <div className="modal-window">
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
                        <div className="fullscreenImage">
                            <img
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
                                    className="single-gallery-image"
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <img
                                        src={
                                            currImage.img
                                                ? currImage.img
                                                : NoImage
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
            </div>

            {/* <div className="modal-window">
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
                            onClick={() => handlePrevSlide(praxisGalerie)}
                        />
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            className="next-modal-image"
                            onClick={() => handleNextSlide(praxisGalerie)}
                        />
                        <div className="fullscreenImage">
                            <img
                                src={praxisGalerie[slidePosition].img}
                                alt={praxisGalerie[slidePosition].alt}
                            />
                        </div>
                    </div>
                )}
                <div className="gallery-image-container">
                    {praxisGalerie &&
                        praxisGalerie.map((currImage, index) => {
                            return (
                                <div
                                    className="single-gallery-image"
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <img
                                        src={
                                            currImage.img
                                                ? currImage.img
                                                : NoImage
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
            </div> */}
        </>
    );
};

export default GalleryContainer;
