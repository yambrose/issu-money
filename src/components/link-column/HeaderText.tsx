import { useAppContext } from "../../context/AppContext";
import Underline from "../Underline";

type HeaderTextProps = {
    text: string;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {

    const context = useAppContext();
    if (!context) return null;

    const { isDarkMode } = context;

    return (
        <div className={`${isDarkMode ? 'is-dark-text' : 'is-light-text'} m-2 w-full flex flex-col items-center`}>
            <h1 className="text-3xl text-center">
                {text}
            </h1>
            <Underline />
        </div>

    );
}

export default HeaderText;