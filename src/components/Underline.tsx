import { useAppContext } from "../context/AppContext";

const Underline = () => {
    const context = useAppContext();
    if (!context) return null;

    const { isDarkMode } = context;

    return <div className="h-0.5 w-1/2"
        style={{
            background: isDarkMode ?
            'linear-gradient(90deg, #f3f3f300, #F3F3F3, #f3f3f300)' :
            'linear-gradient(90deg, #f3f3f300, #000000, #f3f3f300)'
        }}
    />

    // bg-gradient-to-r from-transparent via-[#F3F3F3] to-transparent;
}

export default Underline;