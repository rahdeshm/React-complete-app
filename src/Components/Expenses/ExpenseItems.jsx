// import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
const ExpenseItems = ({props}) => {
   const {date,amount}=props
  const[title,setTitle]= useState(props.title)

  const clickHandler=()=>{
    setTitle('updated',()=>console.log(title))
   
  }
  // useEffect(()=>{
  //   console.log('effect',title);
  // },[title])
  return (
    <Card className='expense-item'>
      <ExpenseDate expenseDate={date}/>
     <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
     </div>
     <button onClick={clickHandler}>Click me</button>
    </Card>
  )

}

export default ExpenseItems