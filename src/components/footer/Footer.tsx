import Underline from "../Underline";

const Footer = () => {

    /* Footer of the page */
    
    return (
        <footer
            className="w-full flex flex-col justify-between p-8 items-center py-8 text-white
                bg-gradient-to-b from-[#2f4b8800] to-[#2F4B88] to-25% h-max"
        >
            <Underline />
            <span className="w-full flex flex-col justify-between h-max mt-2">
                <span className="w-full flex flex-col lg:flex-row gap-4 justify-between h-max mt-6">
                    <p className="xs:w-full lg:w-1/4 text-center lg:text-start">© 2025 issu (Frank). All rights reserved.</p>
                    <p className="w-full lg:w-1/2 text-center">Made in collaboration with <a className="underline" href="https://github.com/yambrose">yambrose</a>. Powered by <a className="underline" href="https://billing.nixihost.com/aff.php?aff=362">Nixihost</a>, hopes, and dreams.</p>
                    <span className="w-full lg:w-1/4 flex gap-4 justify-center lg:justify-end h-max">
                        <p className="xs:w-full text-center lg:text-end"><a className="underline" href="/contact">Contact</a></p>
                        <p className="xs:w-full text-center lg:text-end"><a className="underline" href="https://github.com/TheLivingPepsi/issu-money">Source</a></p>
                    </span>
                </span>
                <p className="disclaimer xs:w-full text-center mt-3">Purchasing anything via the links on this website may earn me an affiliate commission (which means money) at no extra cost to you.</p>
            </span>
        </footer >
    );
}

export default Footer;