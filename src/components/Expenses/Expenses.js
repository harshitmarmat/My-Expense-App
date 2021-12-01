import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectYear,setSelectYear] = useState('2020');
    
    const selectYearHandler = (selectedYear) =>{
        setSelectYear(selectedYear);
    }

    const filteredYear = props.items.filter((item)=> { 
        return (item.date.getFullYear().toString()===selectYear)
    })

    return(
        <Card className="expenses">
            <ExpensesFilter select={selectYear} onSelectYear={selectYearHandler}/>
            <div>
                {/* {filteredYear.length===0 ? (<p>No Expense Item</p>):(filteredYear.map((expense)=> <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                /> ))} */}
                {/* {filteredYear.length===0 && (<p>No Expense Item</p>)}
                {filteredYear.length>0 && (filteredYear.map((expense)=> <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                /> ))} */}

                <ExpensesChart 
                    expenses={filteredYear}
                />
                <ExpenseList
                    items ={filteredYear} 
                    />
            </div>
        </Card>
    );
}

export default Expenses;
