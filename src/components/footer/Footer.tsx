import Underline from "../Underline";

const Footer = () => {
    return (
        <footer
            className="w-full h-16 flex flex-col justify-between p-8 items-center py-8 text-white
                bg-gradient-to-b from-[#2f4b8800] to-[#2F4B88] to-35% min-h-28"
        >
            <Underline />
            <span className="w-full flex justify-center">
                <p className="w-1/3 text-center">© 2025 issu (Frank). All rights reserved.</p>
                <p className="w-1/3 text-center">Made with BoonMoon and powered by hopes and dreams.</p>
                <p className="w-1/3 text-center"><a className="underline" href="#">Contact me</a></p>
            </span>
        </footer >
    );
}

export default Footer;