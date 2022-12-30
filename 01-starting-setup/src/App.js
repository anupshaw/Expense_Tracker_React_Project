import AuthForm from "./component/Auth/AuthForm";

import { Route, Switch } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/AuthContext";
import Welcome from "./page/WelcomePage";
import CompletePage from "./page/CompletePage";
import VerifyUserProfile from "./component/VerifyUserProfile/VerifyUserProfile";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <AuthForm />
      </Route>
      <Route exact path="/welcome">{authCtx.isLoggedIn && <Welcome />}</Route>
      <Route  path='/welcome/complete'>
           <CompletePage />
        </Route>
        <Route  path='/verifyUserProfile'>
           <VerifyUserProfile />
        </Route>
        <Route  path='/forgotPassword'>
        <ForgotPassword />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
