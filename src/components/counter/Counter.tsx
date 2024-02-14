import Button from "../ui/button/Button";
import styles from "./Counter.module.scss";
import { Store, dispatch, useSelector } from "../../store";
import { CounterActions } from "../../store/counter";

const Counter: React.FC<{}> = () => {
  const counter = useSelector<Store, number>((state) => state.counter.counter);

  function handleCounterDecrement() {
    dispatch<CounterActions, undefined>("counter", "decrement");
  }

  function handleCounterIncrement() {
    dispatch<CounterActions, undefined>("counter", "increment");
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
