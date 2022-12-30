import classes from "./ExpenseItem.module.css";
const ExpenseItem = (props) => {
  return (
    <div className={classes.expenseItem}>
      <p>{props.text}</p>
      <p>${props.amount}</p>
      <p>{props.category}</p>
    </div>
  );
};

export default ExpenseItem;
