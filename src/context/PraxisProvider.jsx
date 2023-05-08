import React, { useState } from "react";

export const PraxisContext = React.createContext();

const PraxisProvider = ({ children }) => {
    const [slidePosition, setSlidePosition] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [activeGallery, setActiveGallery] = useState("");

    const handleOpenModal = (index, id) => {
        setActiveGallery(id);
        setSlidePosition(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handlePrevSlide = (galerie) => {
        slidePosition === 0
            ? setSlidePosition(galerie.length - 1)
            : setSlidePosition(slidePosition - 1);
    };

    const handleNextSlide = (galerie) => {
        slidePosition + 1 === galerie.length
            ? setSlidePosition(0)
            : setSlidePosition(slidePosition + 1);
    };
    const navToggle = (toggle) => {
        const navLinkContainer = document.querySelector(".nav-link-container");
        if (toggle) navLinkContainer.style.display = "block";
        else navLinkContainer.style.display = "none";
    };

    return (
        <PraxisContext.Provider
            value={{
                navToggle,
                slidePosition,
                setSlidePosition,
                openModal,
                handleOpenModal,
                handleCloseModal,
                handlePrevSlide,
                handleNextSlide,
                activeGallery,
            }}
        >
            {children}
        </PraxisContext.Provider>
    );
};

export default PraxisProvider;
