import '../css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// import React, { useState } from 'react'

function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //     setTitle('Updated');
    // }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;