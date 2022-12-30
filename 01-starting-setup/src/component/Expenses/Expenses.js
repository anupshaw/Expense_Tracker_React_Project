import ExpenseItem from "./ExpenseItem";
import classes from "./Expenses.module.css";
const Expenses = (props) => {
//   const items = [
//     {
//       text: "Abc",
//       amount: "10",
//       category: "food",
//     },
//     {
//       text: "Abc",
//       amount: "10",
//       category: "food",
//     },
//   ];

console.log('Expenseitems',props.items)
  return (
    <div className={classes.expensesContainer}>
        <h1>Expenses</h1>
      <div className={classes.expenses}>
        {props.items.map((item) => {
          return (
            <ExpenseItem
              text={item.text}
              amount={item.amount}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Expenses;
