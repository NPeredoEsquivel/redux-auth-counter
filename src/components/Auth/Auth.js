import classes from "./Auth.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const onLoginHandler = (event) => {
    event.preventDefault();
    dispatch(login());
  };
  return (
    <main className={classes["auth"]}>
      <section>
        <form onSubmit={onLoginHandler}>
          <div className={classes["control"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes["control"]}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;