import './ExpenseDate.css';

function ExpenseDate({date}){
    console.log(date,"this is the givemn date")
    const month=date.toLocaleString('en-US',{month:'long'});
    const day=date.toLocaleString('en-US',{day:'2-digit'});
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