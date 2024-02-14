import { useSelector } from "react-redux";
import Login from "../login/Login";
import styles from "./Header.module.scss";
import Logout from "../logout/Logout";
import { Store } from "../../store";

const Header: React.FC<{}> = () => {
  const isAuthenticated = useSelector<Store, boolean>(
    (store) => store.authentication.isAuthenticated
  );

  return (
    <header className={styles.header}>
      <strong>Custom redux store</strong>
      <div className="actions">
        {isAuthenticated ? <Logout></Logout> : <Login></Login>}
      </div>
    </header>
  );
};

export default Header;
