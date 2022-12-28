import classes from "./CompletePage.module.css";
import { Link } from "react-router-dom";

import UpdateProfileForm from "../component/Layout/UpdateProfileForm";
const CompletePage = () => {
  return (
    <div className={classes.completePage}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h4>Winners never quite,Quitters never win</h4>
          <p>
            Your Profile is 64% completed.A complete profile has
            <br />
            higher chances of landing a job &nbsp;
            <Link to="/welcome/complete" className={classes.link}>
              Complete now
            </Link>
          </p>
        </nav>
      </header>
      <hr />
      <UpdateProfileForm/>
    </div>
  );
};

export default CompletePage;
