import React from 'react'
import ExpenseItems from './ExpenseItems';
const ExpenseList = (props) => {
    console.log(props);
let expensesContent=<p>No expenses found</p>;

if(props.item.length>0){
  expensesContent=props.item.map(({id,date,title,amount})=>(
    <ExpenseItems key={id} props={{date,title,amount}} />
  ))
}
  return (
    <div>
        {expensesContent}
    </div>
  )
}

export default ExpenseList