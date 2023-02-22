// import React from 'react'
import Card from "../UI/Card";
import ExpenseItems from './ExpenseItems';
import './Expenses.css'
const Expenses=({expenses})=>{
    console.log(expenses,expenses[0]);
  return (
    <Card className='expenses'>

        {
            expenses.map(({amount,id,title,date})=>{
                return  <ExpenseItems key={id} props={{date,title,amount}}/>
            })
        }
      {/* <ExpenseItems props={{expenseDate,expenseTitle,expensePrice}}/>
      <ExpenseItems props={{expenseDate,expenseTitle,expensePrice}}/>
      <ExpenseItems props={{expenseDate,expenseTitle,expensePrice}}/>
      <ExpenseItems props={{expenseDate,expenseTitle,expensePrice}}/> */}
    </Card>
  )
}

export default Expenses