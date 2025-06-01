import { Link, Outlet } from "react-router-dom";
import logoTht from "../../assets/LOGO_THT_3.png";
import { useEffect, useState } from "react";

const MainLayouts = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("scrolled", scrollY);

  return (
    <div className="flex flex-col">
      <div
        className={`fixed top-0 z-10 xl bg-white shadow-md flex items-center justify-between px-7  w-full   ${
          scrollY >= 35
            ? "w-full h-20"
            : "xl:container xl:w-[60%] h-16 xl:left-1/2 xl:-translate-x-1/2 xl:rounded-full xl:mt-5 "
        }`}
      >
        <Link to="/">
          <img
            src={logoTht}
            alt="Logo THT"
            className={`${
              scrollY <= 35 ? "h-14" : "h-16"
            } transition-all duration-300`}
          />
        </Link>
        <nav
          className={`flex space-x-4 items-center  transition-all duration-300 ${
            scrollY >= 35 ? "text-lg" : "text-md"
          }`}
        >
          <Link to="/" className="text-orange-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-orange-600 hover:underline">
            About Us
          </Link>
          <Link to="/donation" className="text-orange-600 hover:underline">
            Donation
          </Link>
          <Link to="/Ticket" className="text-orange-600 hover:underline">
            Ticket
          </Link>
          <Link to="/contact" className="text-orange-600 hover:underline">
            News & Article
          </Link>
        </nav>
        <div className="flex items-center space-x-2 ">
          <Link
            to="/login"
            className={`text-orange-600 font-semibold underline  transition-all duration-300 ${
              scrollY >= 35 ? "text-lg" : "text-md"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
