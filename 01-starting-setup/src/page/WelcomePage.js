import { Link} from "react-router-dom";
import classes from './WelcomePage.module.css'

const Welcome=()=>{
    return <header className={classes.header}>
        <nav className={classes.nav}>
        <h1 >WELCOME!!!</h1>
        <p>Your Profile is incomplete?&nbsp;<Link to='/welcome/complete' className={classes.link}>Complete now</Link></p>
        </nav>
    </header>
}


export default Welcome;