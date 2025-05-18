import {NavLink} from "react-router";

const SideBar: React.FC = () => {

    return (
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </nav>
    );
}

export default SideBar;