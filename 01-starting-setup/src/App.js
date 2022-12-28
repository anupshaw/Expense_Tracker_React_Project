import AuthForm from "./component/Auth/AuthForm";
import Welcome from "./component/Layout/Welcome";
import { Route } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Route path="/" exact>
        <AuthForm />
      </Route>
      <Route path="/welcome">{authCtx.isLoggedIn && <Welcome />}</Route>
    </div>
  );
}

export default App;
