import { Link, Outlet, useLocation } from "react-router-dom";
import backgroundImage from "../../assets/JPEG-2000.png";
import logoTht from "../../assets/LOGO_THT_3.png";
import { useEffect, useState } from "react";

const MainLayouts = () => {
  const location = useLocation().pathname;

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
    <div className="flex flex-col ">
      <div
        className={
          location === "/"
            ? "bg-cover bg-no-repeat bg-fixed h-130 bg-position-[center_bottom_10rem] "
            : ""
        }
        style={
          location === "/" ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      >
        {location === "/" ? (
          <>
            <div className="absolute inset-0 bg-orange-600 h-130 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-130"></div>{" "}
          </>
        ) : null}

        <div
          className={` ${scrollY <= 35 ? `xl:mx-46` : "mx-auto"}  xl:mt-8  ${
            scrollY >= 35 ? `h-20` : "h-16"
          } bg-white flex items-center justify-between px-7 shadow-md ${
            scrollY <= 35 ? `xl:rounded-full` : ""
          } sticky top-0 z-10`}
        >
          <Link to="/">
            <img
              src={logoTht}
              alt="Logo THT"
              className={`${scrollY <= 35 ? `h-14` : "h-16"}`}
            />
          </Link>
          <nav
            className={`flex space-x-4 items-center ${
              scrollY >= 35 ? `text-lg` : "text-md"
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
          <div className="flex items-center space-x-2">
            <Link
              to="/login"
              className={`text-orange-600  font-semibold ${
                scrollY >= 35 ? `text-lg` : "text-md"
              } underline`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <main className="absolute top-0 mt-15 xl:mt-25 w-full items-center">
        <div className="xl:mx-45">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayouts;
