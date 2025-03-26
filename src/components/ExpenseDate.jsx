import './ExpenseDate.css';

function ExpenseDate({date}){
    console.log(date,"this is the givemn date")
    const month=date.toLocalestring('en-US',{month:'long'});
    const day=date.toLocalestring('en-US',{day:'long'});
    const year=date.getFullYear();

    return(
        <>
        <div className='expense-date'>
            <div>month</div>
            <div>year</div>
            <div>date</div>

        </div>
        </>
    )
}
export default ExpenseDate;