import Card from './Card';
import ExpenseList from './ExpenseList';
import './Expenses.css/';
import { useState } from 'react';


const Expenses = ({items}) => {
    const[filteredYear,setFilteredYear]=useState('2020')
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    };
    return(
        <>
        <div>
            <Card>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                
            
            
            
            </Card>
        <ExpenseList items={items}/>
        </div>
        </>
    )

};
export default Expenses