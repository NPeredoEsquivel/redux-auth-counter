import classes from "./Counter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increaseByAmount,
  toggleCounter,
} from "../../store/counterSlice";

const Counter = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseCounterHandler = () => {
    dispatch(increment());
  };

  const decreaseCounterHandler = () => {
    dispatch(decrement());
  };

  const increaseByFiveCounterHandler = () => {
    dispatch(increaseByAmount({ amount: 5 }));
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const { value: counterValue, showCounter } = counterState;

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? (
        <div className={classes.value}>{counterValue}</div>
      ) : (
        <></>
      )}
      <div className={classes.actions}>
        <button onClick={decreaseCounterHandler}>Decrease</button>
        <button onClick={increaseCounterHandler}>Increase</button>
        <button onClick={increaseByFiveCounterHandler}>Increase by five</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
