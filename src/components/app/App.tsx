import { Store } from "../../store";
import Counter from "../counter/Counter";
import Header from "../header/Header";
import "./App.module.scss";
import { useSelector } from "react-redux";

function App() {
  const inAuthenticated = useSelector<Store, boolean>(
    (state) => state.authentication.isAuthenticated
  );

  return (
    <>
      <Header></Header>
      {inAuthenticated && <Counter></Counter>}
    </>
  );
}

export default App;
