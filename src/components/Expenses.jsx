import Card from './Card';
import ExpenseList from './ExpenseList';
import './Expenses.css/';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
// import ChartBar from './ChartBar';
import ExpensesChart from './ExpensesChart';


const Expenses = ({items}) => {
    const[filteredYear,setFilteredYear]=useState('2020')
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = items.filter((expenses)=>{
        return expenses.date.getFullYear().toString()=== filteredYear
    })
    return(
        <>
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses}/>
            
            
            </Card>
       
        </div>
        </>
    )

};
export default Expenses