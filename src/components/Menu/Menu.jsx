import { useContext } from "react";
import { PraxisContext } from "../../context/PraxisProvider";
import { Spin as Hamburger } from "hamburger-react";

const Menu = () => {
    const { navToggle } = useContext(PraxisContext);

    return (
        <div className="hamburger-menu">
            <Hamburger
                direction="right"
                rounded
                label="Show menu"
                onToggle={navToggle}
            />
        </div>
    );
};

export default Menu;
