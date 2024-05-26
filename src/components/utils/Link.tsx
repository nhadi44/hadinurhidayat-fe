import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

interface LinkProps {
  url: string;
  name: string;
  className?: string;
}

const getNavLinkStyle = (isActive: boolean, isMobile: boolean) => {
  if (isActive) {
    return {
      color: isMobile ? "var(--darker-yellow-color)" : "var(--yellow-color)",
    };
  } else {
    return { color: isMobile ? "var(--gray-color)" : "var(--white-color)" };
  }
};

const Link: React.FC<LinkProps> = ({ url, name, className }) => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is not defined");
  }

  const { state } = context;

  return (
    <NavLink
      to={url}
      className={className}
      style={({ isActive }) => getNavLinkStyle(isActive, state.isMobile)}
    >
      {name}
    </NavLink>
  );
};

export default Link;
