import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${classes.btn} ${props.className}`}
      type={props.type}
      onClick={props.onClick}

      disabled={props.disabled ? props.disabled: ''}
    >
      {props.children}
    </button>
  );
};

export default Button;
