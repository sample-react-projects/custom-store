import { AuthenticationActions } from "../../store/authentication";
import Button from "../ui/button/Button";
import { dispatch } from "../../store";

const Logout: React.FC<{}> = () => {
  function handleLogout() {
    dispatch<AuthenticationActions, undefined>("authentication", "logout");
  }

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
