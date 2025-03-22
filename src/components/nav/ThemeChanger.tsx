import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const ThemeChanger = () => {
    const appContext = useAppContext();

    if (!appContext) {
        return null;
    }

    const { isDarkMode, handleThemeChange } = appContext;

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="flex relative justify-center gap-4 outline-white outline-2 items-center rounded-full p-2"
            onClick={() => handleThemeChange(!isDarkMode)}>
            <p>☀️</p>
            <p>🌙</p>
            <div
                className="absolute w-9 h-9 rounded-full bg-[#F3F3F3] transition-transform duration-300"
                style={{ transform: isDarkMode ? 'translateX(50%)' : 'translateX(-50%)' }}
            />
        </div>
    );
};

export default ThemeChanger;