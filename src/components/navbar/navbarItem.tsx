import { useContext } from "react";
import Link from "../utils/Link";
import style from "./navbar.module.css";
import { GlobalContext } from "../../context/GlobalContext";

interface MenuItems {
  name: string;
  path: string;
}

interface NavbarItemProps {
  menus: MenuItems[];
}

const NavbarItem: React.FC<NavbarItemProps> = ({ menus }) => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext is not defined");
  }
  const { state } = context;

  return (
    <ul
      className={
        state.isMobile ? style.navbar__items_mobile : style.navbar__items
      }
    >
      {menus.map((menu) => (
        <li
          className={
            state.isMobile ? style.navbar__menu_mobile : style.navbar__menu
          }
          key={menu.name}
        >
          <Link name={menu.name} url={menu.path} />
        </li>
      ))}
    </ul>
  );
};

export default NavbarItem;
