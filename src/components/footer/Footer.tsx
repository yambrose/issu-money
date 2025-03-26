import Underline from "../Underline";

const Footer = () => {

    /* Footer of the page */
    
    return (
        <footer
            className="w-full flex flex-col justify-between p-8 items-center py-8 text-white
                bg-gradient-to-b from-[#2f4b8800] to-[#2F4B88] to-35% h-max"
        >
            <Underline />
            <span className="w-full flex flex-col gap-4 lg:flex-row md:gap-0 justify-between h-max mt-6">
                <p className="xs:w-full text-center lg:w-1/3 lg:text-start">© 2025 issu (Frank). All rights reserved.</p>
                <p className="xs:w-full text-center lg:w-1/3">Made with BoonMoon and powered by hopes and dreams.</p>
                <p className="xs:w-full text-center lg:w-1/3 lg:text-end"><a className="underline" href="/contact-me">Contact me</a></p>
            </span>
        </footer >
    );
}

export default Footer;