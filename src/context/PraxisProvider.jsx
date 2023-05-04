import React from "react";

export const PraxisContext = React.createContext();

const PraxisProvider = ({ children }) => {
    const navToggle = (toggle) => {
        const navLinkContainer = document.querySelector(".nav-link-container");
        if (toggle) navLinkContainer.style.display = "block";
        else navLinkContainer.style.display = "none";
    };

    return (
        <PraxisContext.Provider value={{ navToggle }}>
            {children}
        </PraxisContext.Provider>
    );
};

export default PraxisProvider;
