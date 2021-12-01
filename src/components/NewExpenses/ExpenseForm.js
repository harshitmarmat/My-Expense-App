import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (porps) => {
    // const [userInput , setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle : event.target.value}
        // })
    }

    const amountChangedHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState , enteredAmount: event.target.value}
        // })
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState , enteredDate : event.target.value}
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        // console.log(expenseDate);
        porps.onSaveExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        porps.showForm(false);

    };

    const showFormHandler =()=>{
        porps.showForm(true);
    }

    const hideFormHandler = () =>{
        porps.showForm(false);
    }

    let form =    (<div className="new-expense__control">
                        <button onClick={showFormHandler}>Add Expense</button>
                    </div>)

    if(porps.show){
        form = (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type="text" 
                    value={enteredTitle}
                    onChange={titleChangedHandler} 
                    />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value= {enteredAmount}
                    onChange={amountChangedHandler}
                    />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type="date" 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    value={enteredDate}
                    onChange={dateChangedHandler} 
                    />
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={hideFormHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>)
    }

    return(
        <div>
            {form}
        </div>     
    )
}

export default ExpenseForm;