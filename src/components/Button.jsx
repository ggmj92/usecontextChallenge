import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        console.log('button clicked!')
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    };

    return (
        <button onClick={handleClick}>
            Toggle {theme} theme
        </button>
    )
};

export default Button;