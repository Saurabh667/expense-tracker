import React,{ useState } from 'react';
import './ExpenseForm.css';



const ExpenseForm = ({onSaveExpenseData,onCancel,onSaveExpenseDataHandler}) => {
    const[title,setTitle]=useState('');
    const[amount,setAmount]=useState('');
    const[date,setDate]=useState('');

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    
    }
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    
    }
    const saurabhHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title : title,
            amount : +amount,
            date : new Date(date)
        };
        console.log(expenseData,"this is my expense");
        onSaveExpenseData(expenseData);
    } 


    return(
        <>
        <form onSubmit={saurabhHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" value={amount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onSaveExpenseData={onSaveExpenseDataHandler} onClick={onCancel}>cancel</button>
                <button type='submit' >add expense</button>
            </div>
        </form>
        </>
    )
};

export default ExpenseForm

