import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants/index";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-4 py-3 shadow-md ">
                {/* Desktop Menu */}
                <div className="container mx-auto flex lg:flex-row flex-col items-center">
                    {/* Left-aligned Text */}
                    <a href="/" className="text-2xl lg:flex hidden font-bold text-gray-800 lg:mr-auto">
                        Michael
                    </a>
                    
                    {/* Centered Navigation Links */}
                    <ul className="hidden lg:flex gap-10 tracking-normal mx-auto flex-grow justify-center">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-red-300 transition-colors duration-300" onClick={(e) => handleLinkClick(e, item.href)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button */}
                    <button className="hidden lg:block bg-black text-white px-4 py-2 rounded hover:bg-red-900 transition-colors duration-300">
                        Resume
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex justify-between items-center relative">
                    <a href="/" className="text-xl font-bold text-gray-800">
                        Michael
                    </a>
                    <div className="relative">
                        <button
                            className="focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="m-0 h-5 w-5" />
                            ) : (
                                <FaBars className="m-0 h-5 w-5" />
                            )}
                        </button>

                        {/* Dropdown Mobile Menu */}
                        <div className={`absolute right-0 mt-6 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 `}>
                            <ul className="flex flex-col gap-0">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href={item.href} 
                                            className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-right" 
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a 
                                        href="#" 
                                        className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-right"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;