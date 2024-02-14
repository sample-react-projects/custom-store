import { useDispatch } from "react-redux";
import Button from "../ui/button/Button";
import { authenticationActions } from "../../store/authentication";

const Login: React.FC<{}> = () => {
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(authenticationActions.login());
  }
  
  return <Button onClick={handleLogin}>Login</Button>;
};

export default Login;
