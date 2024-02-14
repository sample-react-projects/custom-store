import Button from "../ui/button/Button";
import { AuthenticationActions } from "../../store/authentication";
import { dispatch } from "../../store";

const Login: React.FC<{}> = () => {
  function handleLogin() {
    dispatch<AuthenticationActions, undefined>("authentication", "login");
  }

  return <Button onClick={handleLogin}>Login</Button>;
};

export default Login;
