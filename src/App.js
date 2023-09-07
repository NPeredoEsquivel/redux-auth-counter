import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth);
  const { isAuthenticated } = authState;
  console.log(isAuthenticated && "hola");
  return (
    <>
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
