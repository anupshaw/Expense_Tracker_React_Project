import React from "react";
import Expenses from "../component/Expenses/Expenses";

const ExpensePage=(props)=>{


    return <React.Fragment>
       <Expenses items={props.items} />
    </React.Fragment>
}

export default ExpensePage;