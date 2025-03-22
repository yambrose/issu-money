import { ReactNode } from "react";
import { useAppContext } from "../../context/AppContext";

type LinkButtonProps = {
    icon: ReactNode;
    text: string;
    url?: string;
    subtext?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, url = "#", subtext = "" }) => {
    const context = useAppContext();
    if (!context) return null;

    const { isDarkMode } = context;

    return (
        <div className={`${isDarkMode ? 'is-dark-text' : 'is-light-text'} w-full flex flex-col`}>
            <a href={url} target="_blank" className={`outline-2 rounded-md hover-button ${isDarkMode ? 'hover-button-dark' : 'hover-button-light'}`}>
                <span className="flex items-center justify-center gap-2 text-xl">{icon}{text}</span>
            </a>
            <label className="text-[#757575] h-6 text-center">{subtext}</label>
        </div>
    );
};

export default LinkButton;