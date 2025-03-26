import {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=({onAddExpense})=>{
    const[isEditing,setIsEditing]=useState(false);
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false)
    }
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            id:Math.random().toString(),
            ...enteredExpenseData
        };
        console.log(expenseData);
        onAddExpense(expenseData);
        setIsEditing(false);
        
    }
    
    

    
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
            
        </div>

)
};
export default NewExpense;