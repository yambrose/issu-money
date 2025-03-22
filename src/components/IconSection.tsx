import { useAppContext } from "../context/AppContext";

type IconSectionProps = {
    image: string;
};

const IconSection: React.FC<IconSectionProps> = ({ image }) => {

    const context = useAppContext();
    if (!context) return null;

    const { isDarkMode } = context;

    return (
        <div className={`${isDarkMode ? 'is-dark-text' : 'is-light-text'} w-full flex flex-col justify-center items-center p-6 gap-2 text-center h-max`}>
            <img className="w-1/9 m-6 hover:scale-105 transition-transform pulse-effect" src={image} />
            <h2 className="text-3xl">
                You want to give me money?!
            </h2>
            <p className="text-[#757575] h-6 text-xl">
                You'd be impressed at how fast I can make it disappear.
            </p>
        </div>
    );
}

export default IconSection;