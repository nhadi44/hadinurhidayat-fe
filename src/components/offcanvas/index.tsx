import NavbarItem from "../navbar/navbarItem";
import styles from "./offcanvas.module.css";

interface MenuItem {
  name: string;
  path: string;
}
interface OffcanvasProps {
  isOpen: boolean;
  toggleOffcanvas: () => void;
  menus: MenuItem[];
}

const Offcanvas: React.FC<OffcanvasProps> = ({
  isOpen,
  toggleOffcanvas,
  menus,
}) => {
  return (
    <div className={`${styles.offcanvas} ${isOpen ? styles.show : ""}`}>
      <div className={styles["offcanvas-header"]}>
        <div className={styles["offcanvas-title"]}>Menu</div>
        <button
          onClick={toggleOffcanvas}
          aria-label="Close"
          className={styles.offcanvas__btn_close}
        >
          &times;
        </button>
      </div>
      <div className={styles["offcanvas-body"]}>
        <div className={styles.offcanvas__wrapper}>
          <NavbarItem menus={menus} />
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
