import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = ({selected,onFilterChange}) => {
    const dropdownChangeHandler=event=>{
        onFilterChange(event.target.value);
    };
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2023">2023</option>

                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter