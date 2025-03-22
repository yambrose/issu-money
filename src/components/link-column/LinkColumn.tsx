import { ReactNode } from "react";
import HeaderText from "./HeaderText";
import LinkButton from "./LinkButton";

interface LinkColumnProps {
    headerText: string;
    buttons: { icon: ReactNode; text: string; url?: string; subtext?: string}[];
}

const LinkColumn: React.FC<LinkColumnProps> = ({ headerText, buttons }) => {
    return <div className="flex flex-col items-center w-full gap-2 p-6">
        <HeaderText text={headerText} />

        {buttons.map((button, index) => (
            <LinkButton key={index} icon={button.icon} text={button.text} url={button.url} subtext={button.subtext}/>
        ))}
    </div>
};

export default LinkColumn;