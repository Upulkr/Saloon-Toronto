import { useState } from "react";
import UseDarkSide from "./UseDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher() {
    const [colorTheme, setTheme] = UseDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}

export default Switcher
