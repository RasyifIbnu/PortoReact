import { useState, useEffect } from "react";

const Navbar = () => {
    const[showNavbar,setShowNavbar]=useState(true);
    const[lastScrollY, setLastScrollY] = useState(0);
    const[isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    
    useEffect(()=> {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Desktop: always show navbar
            if (isDesktop) {
                setShowNavbar(true);
            } else {
                // Mobile: hide/show based on scroll direction
                if (currentScrollY < lastScrollY) {
                    setShowNavbar(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowNavbar(false);
                }
            }
            
            setLastScrollY(currentScrollY);
        };
        
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    },[lastScrollY, isDesktop]);


  return (
    <div
      className={`navbar py-7 flex items-center justify-between fixed w-screen left-0 top-0 z-50 transition-transform duration-300 bg-zinc/80 backdrop-blur-sm ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="logo px-7 hidden md:block">
        <h1 className="text-3xl font-bold text-white">My Portofolio</h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2  md:translate-x-0 px-7 w-full md:w-auto justify-center md:justify-end`}
      >
        <li>
          <a
            href="#beranda"
            className="sm:text-lg text-base font-medium text-white hover:text-blue-400 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="sm:text-lg text-base font-medium text-white hover:text-blue-400 transition-colors"
          >
            About 
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="sm:text-lg text-base font-medium text-white hover:text-blue-400 transition-colors"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="sm:text-lg text-base font-medium text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Navbar;
