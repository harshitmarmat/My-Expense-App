import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const App = () => {
  const DUMMY_EXPENSE = [
    {
      
      id: 'e1',
      title: 'BOOKS',
      amount: 34.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 82.49, date: new Date(2020, 9, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 74.67,
      date: new Date(2020, 1, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 50,
      date: new Date(2020, 5, 12),
    },
    { id: 'e5', title: 'Watch', amount: 50.49, date: new Date(2020, 0, 21) },
    { id: 'e6', title: 'Bottler', amount: 9.49, date: new Date(2021, 7, 2) },
    { id: 'e7', title: 'AC', amount: 150.49, date: new Date(2021, 2, 11) },
    { id: 'e8', title: 'Carpets', amount: 79.49, date: new Date(2020, 4, 3) },
  ];

  const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    setExpenses((prevExpenses)=>{
      return([expense,...prevExpenses]);
    })
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses
        items={expenses}
        />
    </div>
  );
}

export default App;
