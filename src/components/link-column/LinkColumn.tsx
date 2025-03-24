import { ReactNode } from "react";
import HeaderText from "./HeaderText";
import LinkButton from "./LinkButton";

type LinkColumnProps = {
    headerText: string;
    buttons: { icon: ReactNode; text: string; url?: string; subtext?: string; openInNewTab?: boolean }[];
}

const LinkColumn: React.FC<LinkColumnProps> = ({ headerText, buttons }) => {
    /*
        This component is a column that displays a header text and a list of buttons.
        It is used in the main page to display the links to donate money, watch ads, etc.

        @param (string) headerText: The header text of the column.
        @param (array) buttons: The list of buttons and their attributes to display.
    */
    return <div className="flex flex-col items-center w-full gap-2 p-6">
        <HeaderText text={headerText} />

        {buttons.map((button, index) => (
            <LinkButton key={index} icon={button.icon} text={button.text} url={button.url} subtext={button.subtext} openInNewTab={button.openInNewTab} />
        ))}
    </div>
};

export default LinkColumn;