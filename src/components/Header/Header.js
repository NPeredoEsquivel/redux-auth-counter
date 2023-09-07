import classes from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const Header = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAuthenticated } = authState;

  const onLogoutButtonHandler = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
          <ul>
            <li>
              <a href="/">My Products</a>{" "}
            </li>
            <li>
              <a href="/">My Sales</a>{" "}
            </li>
            <li>
              <button onClick={onLogoutButtonHandler}>Logout</button>{" "}
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
