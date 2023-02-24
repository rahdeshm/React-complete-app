// import React from 'react'
import Card from '../UI/Card';
import './ExpenseDate.css'
const ExpenseDate = ({expenseDate}) => {
   
    const month=expenseDate.toLocaleString('en-us',{month:'long'});
    const day=expenseDate.toLocaleString('en-us',{day:'2-digit'});
    const year=expenseDate.getFullYear();
  return (
    <Card className='expense-date'>
          <div className='expense-date__month'>{month}</div>
          <div className='expense-date__year'>{year}</div> 
          <div className='expense-date__day'>{day}</div>
          
    </Card>
  )
}

export default ExpenseDate