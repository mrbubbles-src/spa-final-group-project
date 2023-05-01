import React from "react";

export const PraxisContext = React.createContext();

const PraxisProvider = ({ children }) => {
    return (
        <PraxisContext.Provider value={{}}>{children}</PraxisContext.Provider>
    );
};

export default PraxisProvider;
