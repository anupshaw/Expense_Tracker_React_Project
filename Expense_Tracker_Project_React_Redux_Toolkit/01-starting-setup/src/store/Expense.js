import { createSlice } from "@reduxjs/toolkit";

const initialState = { expenses: [],totalExpense:''};

const expenseSlice = createSlice({
  name: "Expense",
  initialState: initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
      state.totalExpense=state.expenses.reduce((total,expense)=>{
        return total+(+expense.amount);
      },0)
    },
    deleteExpense(state, action) {
        const deleteExpenseIndex=state.expenses.findIndex((item)=>{
            return item.id===action.payload;
        })

        const updatedTotalAmount=state.totalExpense-state.expenses[deleteExpenseIndex].amount;
      const remainingExpenses = state.expenses.filter((item) => {
        return item.id !== action.payload;
      });
      console.log("remainingExpenses", remainingExpenses);

      state.expenses = remainingExpenses;
      state.totalExpense=updatedTotalAmount;
    },
  },
});

export const expenseAction = expenseSlice.actions;

console.log("expenseAction", expenseAction);

console.log("initialState", initialState);

export default expenseSlice.reducer;
