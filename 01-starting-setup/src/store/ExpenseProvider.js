import { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";

const reducerFunction=(state,action)=>{


    if(action.type==='add')
    {
        return {
            expenses:[action.value,...state.expenses]
        }
    }
}


const ExpenseProvider = (props) => {


const defaultState={
    expenses:[],
}

const [expenseState,dispatch]=useReducer(reducerFunction,defaultState)

console.log('expenseProviderdata',expenseState.expenses);

const addExpenseHandler=(item)=>{
     dispatch({type:'add',value:item})
}

const expenseContext={
    expenses:expenseState.expenses,
    addExpenses:addExpenseHandler
}

  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
