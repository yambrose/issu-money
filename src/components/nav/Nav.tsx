import { useAppContext } from "../../context/AppContext";
import ThemeChanger from "./ThemeChanger";

type NavProps = {
    siteName: string;
};

const Nav: React.FC<NavProps> = ({ siteName }) => {
    /*
        This component is the navigation bar at the top of the page.
        It is used to display the site name and the theme changer.

        @param (string) siteName: The name of the site to display in the navigation bar.
    */

    const context = useAppContext();
    if (!context) return null;

    const { isDarkMode } = context;


    return (
        <nav className="p-4 w-full flex justify-between bg-gradient-to-b from-[#2F4B88] from-80% to-[#0a111e00]">
            <h1 className={`${isDarkMode ? 'is-dark-text' : 'is-dark-text'} text-4xl text-center`}>{siteName}</h1>
            <ThemeChanger />
        </nav>
    );
};

export default Nav;