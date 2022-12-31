import classes from "./ExpenseForm.module.css";
import { TiTick } from "react-icons/ti";
import { GrMoney } from "react-icons/gr";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import ExpenseContext from "../../store/ExpenseContext";

const ExpenseForm = (props) => {
  const IntputExpenseTitleRef = useRef();
  const IntputAmountRef = useRef();
  const IntputCategoryRef = useRef();
  let url='https://expensetracker-e406b-default-rtdb.firebaseio.com/expense.json';
  const history=useHistory();
  const expCtx=useContext(ExpenseContext)
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredExpenseTitle=IntputExpenseTitleRef.current.value;
    const enteredAmount=IntputAmountRef.current.value;
    const selectedCategory=IntputCategoryRef.current.value;

    const resp=await fetch(url,{
      method:'POST',
      body:JSON.stringify({
        title:enteredExpenseTitle,
        amount:enteredAmount,
        category:selectedCategory
      })
    })

    const data=await resp.json();

    if(!resp.ok){
      let errorMessage=data.error.message;
      throw new Error(errorMessage);
    }else{
       history.push("/welcome/Expense");
      console.log('expenseformdata',data);
    }


    expCtx.addExpenses({
      title:enteredExpenseTitle,
      amount:enteredAmount,
      category:selectedCategory
    })
   
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
            ref={IntputExpenseTitleRef}
          ></input>
          <div className={classes.amountButton}>
            <input
              type="number"
              defaultValue="Amount"
              ref={IntputAmountRef}
            ></input>
            <button className={classes.expenseAddButton}>
              <TiTick />
            </button>
          </div>
        </div>
        <div className={classes.category}>
          <label for="category">Category:</label>
          <select name="category" id="category" ref={IntputCategoryRef}>
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
