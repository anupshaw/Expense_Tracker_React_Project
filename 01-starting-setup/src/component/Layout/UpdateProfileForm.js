import classes from "./UpdateProfileForm.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { useContext, useRef } from "react";
import AuthContext from "../../store/AuthContext";

const UpdateProfileForm = (props) => {
  const authCtx = useContext(AuthContext);

  const InputNameRef = useRef();
  const InputUrlRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const fullName = InputNameRef.current.value;
    const photoUrl = InputNameRef.current.value;
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            displayName: fullName,
            photoUrl: photoUrl,
            returnSecureToken: true,
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
    <form className={`${classes.userForm}`} onSubmit={submitHandler}>
      <div className={classes.formHeader}>
        <h5>Contact Details</h5>
        <button>Cancel</button>
      </div>
      <div className={classes.userDetails}>
        <div className={classes.name}>
          <AiFillGithub />
          <label htmlFor="userName">Fullname</label>
          <input type="text" id="userName" ref={InputNameRef}></input>
        </div>
        <div className={classes.url}>
          <BsGlobe2 />
          <label htmlFor="photoUrl">Profile Photo URL</label>
          <input type="url" id="photoUrl" ref={InputUrlRef}></input>
        </div>
      </div>
      <button>Update</button>
      <hr />
    </form>
  );
};

export default UpdateProfileForm;
