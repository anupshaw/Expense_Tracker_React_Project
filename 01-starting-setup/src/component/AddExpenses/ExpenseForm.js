import classes from "./ExpenseForm.module.css";
import { TiTick } from "react-icons/ti";
import { GrMoney } from "react-icons/gr";
import { useRef } from "react";

const ExpenseForm = (props) => {
  const IntputEnterTextRef = useRef();
  const IntputAmountTextRef = useRef();
  const IntputCategoryTextRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredText=IntputEnterTextRef.current.value;
    const enteredAmount=IntputAmountTextRef.current.value;
    const selectedCategory=IntputCategoryTextRef.current.value;
    props.onAddItem({
        text:enteredText,
        amount:enteredAmount,
        category:selectedCategory
    });
  };
  return (
    <div className={classes.expenseFormContainer}>
      <form className={classes.expenseForm} onSubmit={submitHandler}>
        <div className={classes.expenseHeader}>
          <GrMoney />
          <h1>Expense(Debit)</h1>
        </div>
        <div className={classes.textNumber}>
          <input
            type="text"
            defaultValue="Enter Text"
            ref={IntputEnterTextRef}
          ></input>
          <div className={classes.amountButton}>
            <input
              type="number"
              defaultValue="Amount"
              ref={IntputAmountTextRef}
            ></input>
            <button className={classes.expenseAddButton}>
              <TiTick />
            </button>
          </div>
        </div>
        <div className={classes.category}>
          <label for="category">Category:</label>
          <select name="category" id="category" ref={IntputCategoryTextRef}>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
