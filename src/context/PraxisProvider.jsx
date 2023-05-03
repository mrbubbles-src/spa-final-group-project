import React from "react";

export const PraxisContext = React.createContext();

const PraxisProvider = ({ children }) => {
    const navToggle = (toggle) => {
        const navLinkContainer = document.querySelector(".nav-link-container");
        if (toggle) return (navLinkContainer.style.display = "block");
        else return (navLinkContainer.style.display = "none");
    };

    return (
        <PraxisContext.Provider value={{ navToggle }}>
            {children}
        </PraxisContext.Provider>
    );
};

export default PraxisProvider;
