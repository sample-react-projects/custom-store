import { useDispatch } from "react-redux";
import { authenticationActions } from "../../store/authentication";
import Button from "../ui/button/Button";

const Logout: React.FC<{}> = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authenticationActions.logout());
  }

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
