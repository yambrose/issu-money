import { useAppContext } from "../context/AppContext";
import { Tooltip } from "react-tooltip";

type IconSectionProps = {
    image: string;
};
const IconSection: React.FC<IconSectionProps> = ({ image }) => {
    /*
        This component is a section that displays an image, a title, and a paragraph.
        It is used in the main page to display the main image and a title.

        @param (string) image: The image to display in the section.
    */
    const context = useAppContext();
    if (!context) return null;

    const { isDarkMode } = context;

    return (
        <>
            <div className={`${isDarkMode ? 'is-dark-text' : 'is-light-text'} w-full flex flex-col justify-center items-center p-6 gap-2 text-center h-max`}>
                <a href="https://x.com/slivia_cat/status/1808386631851749722" target="_blank" className="flex justify-center">
                    <img className="w-1/2 lg:w-2/9 xl:w-1/9 m-6 hover:scale-105 transition-transform pulse-effect" src={image}
                        data-tooltip-id="tooltip" data-tooltip-content="Check out the artist's X page!"
                    />
                </a>
                <h2 className="text-3xl">
                    You want to give me money?!
                </h2>
                <p className="text-[#757575] h-6 text-xl">
                    You'd be impressed at how fast I can make it disappear.
                </p>
            </div>
            <Tooltip id="tooltip" place="top"
                style={{ background: `${isDarkMode ? '#F3F3F3' : '#020202'}`, color: `${isDarkMode ? '#020202' : '#F3F3F3'}` }}
            />
        </>
    );
}

export default IconSection;