import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import logoTht from "../../assets/LOGO_THT_3.png";
import burgerMenu from "../../assets/burger_menu.svg";
import bugerMenuClose from "../../assets/burger_menu_close.svg";

const MainLayouts = () => {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("scrolled", scrollY);
  // console.log("width", width);

  const NavigationMenu = {
    home: { id: 1, path: "/", label: "Home" },
    about: { id: 2, path: "/about", label: "About Us" },
    donation: { id: 3, path: "/donation", label: "Donation" },
    ticket: { id: 4, path: "/ticket", label: "Ticket" },
    newsArticle: { id: 5, path: "/news-article", label: "News & Article" },
  };

  const NavigationBar = () => {
    const handleMenuClick = () => setIsMenuOpen(true);

    return (
      <div
      className={`flex fixed top-15 z-10 w-full ${
        !isMenuOpen && width <= 830 ? "h-80 shadow-2xl" : ""
      } bg-white shadow-md `}
      >
      <div
        className={` fixed top-0 z-10 bg-white shadow-md flex items-center justify-between px-7  w-full  ${
        scrollY >= 35
          ? "w-full h-16 md:h-20"
          : "xl:container xl:w-[60%] h-16 xl:left-1/2 xl:-translate-x-1/2 xl:rounded-full xl:mt-5 "
        }`}
      >
        <Link to="/" onClick={handleMenuClick}>
        <img
          src={logoTht}
          alt="Logo THT"
          className={`${
          scrollY <= 35 ? "lg:h-14" : "md:h-16"
          } transition-all duration-300 h-12`}
        />
        </Link>
        {width >= 830 ? (
        <>
          <nav
          className={`flex space-x-4 items-center  transition-all duration-300 ${
            scrollY >= 35 ? "text-lg" : "text-md"
          }`}
          >
          {Object.values(NavigationMenu).map((item) => (
            <Link
            key={item.id}
            to={item.path}
            className={`text-orange-600  hover:underline  transition-all duration-300 ${
              scrollY >= 35 ? "text-lg" : "text-md"
            }`}
            onClick={handleMenuClick}
            >
            {item.label}
            </Link>
          ))}
          </nav>
          <div className="flex items-center space-x-2 ">
          <Link
            to="/login"
            className={`text-orange-600 font-semibold underline  transition-all duration-300 ${
            scrollY >= 35 ? "text-lg" : "text-md"
            }`}
            onClick={handleMenuClick}
          >
            Login
          </Link>
          </div>
        </>
        ) : (
        <button
          type="button"
          onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          }}
          className="flex items-center justify-center w-10 h-10 bg-white "
        >
          {isMenuOpen ? (
          <img className="h-8" src={burgerMenu} alt="menu_icon" />
          ) : (
          <img
            className="h-8"
            src={bugerMenuClose}
            alt="menu_close_icon"
          />
          )}
        </button>
        )}
      </div>
      {!isMenuOpen && width <= 830 ? (
        <div className="flex flex-col gap-3 items-center justify-center w-full h-full">
        <nav className="flex flex-col items-center justify-center space-y-3">
          {Object.values(NavigationMenu).map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-orange-600 hover:underline transition-all duration-300 text-lg"
            onClick={handleMenuClick}
          >
            {item.label}
          </Link>
          ))}
        </nav>
        <Link
          to="/login"
          className="text-orange-600 font-semibold underline transition-all duration-300 text-lg"
          onClick={handleMenuClick}
        >
          Login
        </Link>
        </div>
      ) : null}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
