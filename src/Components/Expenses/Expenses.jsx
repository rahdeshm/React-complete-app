// import React from 'react'
import { useEffect, useState } from "react";
import ExpensesFilter from "../FilteredData/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpenseChart";
import ExpenseItems from './ExpenseItems';
import ExpenseList from "./ExpenseList";
import './Expenses.css'
const Expenses=({expenses})=>{
// const[selectedYear,setSelectedYear]=useState('');//new Date().getFullYear()
// const[newExpense,setNewExpense]=useState([...expenses]);
// const[dataMsg,setDataMsg]=useState(false);
    
//    useEffect(()=>{
//      console.log('effect xalled');
//      setNewExpense([...expenses]);
//    },[expenses]);

  
//     const getChangedYear=(year)=>{
//       setSelectedYear(year)
//     }
//     const filterData=(year)=>{
//       console.log(year,'hi');
//       console.log('filter');
//       let dataArray= expenses.filter((item)=>{
//          return item.date.getFullYear()===year
//       })

//      if(dataArray.length !==0){
//         setNewExpense(dataArray)
//         setDataMsg(false)
//      }
//      if(dataArray.length===0){
//       setNewExpense(expenses);
//       setDataMsg(true)
//      }

//     }
//     useEffect(()=>{
//        filterData(parseInt(selectedYear))
//     },[selectedYear]);

//     console.log(dataMsg);

const [filteredYear, setFilteredYear] = useState('2022');


const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
};

const filteredExpenses = expenses.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});


console.log(filteredExpenses);

    return(
    <Card className='expenses'>
      <ExpensesChart expenses={filteredExpenses} />
    <ExpensesFilter getChangedYear={filterChangeHandler}/>

     {/* {filteredExpenses.length===0 && <p>No expense found</p>}
        { 
            filteredExpenses?.map(({amount,id,title,date})=>{
             
                return  <ExpenseItems key={id} props={{date,title,amount}} />
            })
        } */}
        {/* {expensesContent} */}
        <ExpenseList item={filteredExpenses} />
    </Card>

  )
}

export default Expenses