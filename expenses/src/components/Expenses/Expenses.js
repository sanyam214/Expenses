import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import '../css/Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from '../Expenses/ExpensesChart'
// import Card from './Card'

function Expenses(props){
    // console.log(props.items);
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredExpenses = props.items.filter ( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            {filteredExpenses.length === 0 ? (<p style={{color: 'white'}}>No expenses Found</p>) : filteredExpenses.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}/>)}
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}
        </div>
    );
}

export default Expenses;