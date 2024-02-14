import { Store, useSelector } from "../../store";
import Counter from "../counter/Counter";
import Header from "../header/Header";
import "./App.module.scss";

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
