import React from "react";
import ExpenseForm from "../component/AddExpenses/ExpenseForm";

const AddExpensePage=(props)=>{


    return <React.Fragment>
        <ExpenseForm onAddItem={props.onAddItemHandler} />
    </React.Fragment>
}

export default AddExpensePage;