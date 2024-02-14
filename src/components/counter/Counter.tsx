import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/button/Button";
import styles from "./Counter.module.scss";
import { Store } from "../../store";
import { counterActions } from "../../store/counter";

const Counter: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const counter = useSelector<Store, number>((state) => state.counter.counter);

  function handleCounterDecrement() {
    dispatch(counterActions.decrement());
  }

  function handleCounterIncrement() {
    dispatch(counterActions.increment());
  }

  return (
    <div className={styles.counter}>
      <div className={styles.counter__value}>{counter}</div>
      <div className={styles.counter__actions}>
        <Button onClick={handleCounterDecrement}>Decrement</Button>
        <Button onClick={handleCounterIncrement}>Increment</Button>
      </div>
    </div>
  );
};

export default Counter;
