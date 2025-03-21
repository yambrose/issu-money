import { ReactNode } from "react";

type LinkButtonProps = {
    icon: ReactNode;
    text: string;
    url?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
    icon, text, url = "#",
}) => {
    return (
        <button
            className="outline-[#F3F3F3] outline-2 rounded-md bg-black p-2 text-[#F3F3F3]
            hover-button"
        >
            <a href={url}>
                <span className="flex items-center gap-2 text-xl">
                    {icon}
                    {text}
                </span>
            </a>
        </button>
    );
};

export default LinkButton;