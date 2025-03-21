type HeaderTextProps = {
    text: string;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {
    return (
        <div className="m-2 w-full flex flex-col items-center">
            <h1 className="text-[#F3F3F3] text-6xl">
                {text}
            </h1>
            {/* underline */}
            <div className="h-0.5 w-full underline"/>
        </div>

    );
}

export default HeaderText;