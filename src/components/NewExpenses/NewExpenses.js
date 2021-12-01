import React, { useState } from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) =>{

    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = (value) => {
        setShowForm(value);
    }

    return(
        <div className="new-expense">
            <ExpenseForm 
                onSaveExpense={saveExpenseHandler}
                show = {showForm}
                showForm={showFormHandler}
                />
        </div>
    )
}

export default NewExpenses;