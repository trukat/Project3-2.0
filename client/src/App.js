import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {
      try {
        const userRes = await axios.get("/user", {
          headers: { "x-auth-token": token },
        });
        console.log("user", userRes);
        setUserData({
          token,
          user: userRes.data,
        });
      } catch (err) {
        console.log("User must Log in");
      }
    }
  };

  const logOut = () => {
    setUserData({ user: undefined, token: undefined });
    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        {!userData.user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <Link to="/" onClick={logOut}>
            Log Out
          </Link>
        )}
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
