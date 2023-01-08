import { useHistory } from "react-router-dom";

import classes from "./VerifyUserProfile.module.css";
import { useSelector } from "react-redux";
const VerifyUserProfile = () => {
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();

  const verifyHandler = async () => {
    console.log("clicked");

    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
          }),
        }
      );
      console.log("verifyresp", resp);
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      } else {
        console.log("verifyUserProfileResp", data);
        history.replace("/welcome");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes.verify}>
      <button onClick={verifyHandler}>Verify</button>
    </div>
  );
};

export default VerifyUserProfile;
