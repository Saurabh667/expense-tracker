import {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const[isEditing,setIsEditing]=useState(false);
    const startEditingHandler = ()=>{
        setIsEditing(true);
    };
    
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm/>}
            
        </div>

)
}
export default NewExpense;