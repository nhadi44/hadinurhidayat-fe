import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import NavbarItem from "./navbarItem";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Hamburger from "hamburger-react";
import Offcanvas from "../offcanvas";

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext is not defined");
  }

  const { state, navbarScrolled, mobileState } = context;

  const toggleOffcanvas = () => {
    setOpen(!isOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbarScrolled(true);
    } else {
      navbarScrolled(false);
    }
  };

  const handleMobile = () => {
    if (window.innerWidth < 1024) {
      mobileState(true);
    } else {
      mobileState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const pageIsLoaded = () => {
      handleMobile();
    };
    window.addEventListener("load", pageIsLoaded);
    return () => window.removeEventListener("load", pageIsLoaded);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    return () => window.removeEventListener("resize", handleMobile);
  }, []);

  return (
    <nav className={state.isScrolled ? style.navbar__scrolled : style.navbar}>
      <div
        className={
          state.isMobile
            ? `container-sm ${style.navbar__wrapper}`
            : `container-xl ${style.navbar__wrapper}`
        }
      >
        <Link to={"/"} className={style.navbar__brand}>
          Hadi Nurhidayat
        </Link>
        {state.isMobile ? (
          <>
            <Hamburger
              toggled={isOpen}
              toggle={toggleOffcanvas}
              color="var(--white-color)"
              size={25}
            />
            <Offcanvas
              isOpen={isOpen}
              toggleOffcanvas={toggleOffcanvas}
              menus={menus}
            />
          </>
        ) : (
          <>
            <NavbarItem menus={menus} />
            <Link to={"#"} className={style.navbar__my_resume}>
              My Resume
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
