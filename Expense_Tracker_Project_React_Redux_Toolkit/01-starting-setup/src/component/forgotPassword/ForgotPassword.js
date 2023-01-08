import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const InputEmailRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = InputEmailRef.current.value;
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enteredEmail,
          }),
        }
      );
      const data = await resp.json();

      if (!resp.ok) {
        let errorMessage = data.error.message;
        throw new Error(errorMessage);
      } else {
        console.log("updateProfileData", data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={classes.ForgetPasswordFormContainer}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h4 className={classes.header}>
          Enter the email with which you registered
        </h4>
        <input
          type="text"
          placeholder="Email"
          className={classes.email}
          ref={InputEmailRef}
        ></input>

        <Button className={classes.loginButton}>Send Link</Button>

        <h6 className={classes.forgotPassword}>
          <Link to="/">Already a user?Login</Link>
        </h6>
      </form>
    </div>
  );
};

export default ForgotPassword;
