import AuthForm from "./component/Auth/AuthForm";

import { Route, Switch, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "./store/AuthContext";
import Welcome from "./page/WelcomePage";
import CompletePage from "./page/CompletePage";
import VerifyUserProfile from "./component/VerifyUserProfile/VerifyUserProfile";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";
import AddExpensePage from "./page/AddExpensePage";
import ExpensePage from "./page/ExpensePage";

function App() {
  const [items, setItems] = useState([]);
  const history = useHistory();

  console.log("items", items);

  const addItemHandler = (expenseItem) => {
    history.push("/welcome/Expense");

    setItems((prevState) => {
      return [expenseItem, ...prevState];
    });
  };
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
        <Route exact path="/welcome">
          {authCtx.isLoggedIn && <Welcome />}
        </Route>
        <Route path="/welcome/complete" exact>
          <CompletePage />
        </Route>
        <Route path="/verifyUserProfile">
          <VerifyUserProfile />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/welcome/AddExpense" exact>
          <AddExpensePage onAddItemHandler={addItemHandler} />
        </Route>
        <Route path="/welcome/Expense">
          <ExpensePage items={items} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
