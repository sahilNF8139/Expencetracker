import React,{useState} from "react";

import './Expenceform.css'

let Expenceform =(props)=>{

    let[enteredTitle,setenterdtitle]=useState('');
    let[enteredAmount,setenterdAmount]=useState('');
    let[enteredDate,setenterdDate]=useState('');

    let titlechangehendler=(event)=>{
        console.log("this is event",event);
        setenterdtitle(event.target.value)
    }
    let Amountchangehendler=(event)=>{
        console.log(event.target.value);
        setenterdAmount(event.target.value)
    }
    let Datechangehendler=(event)=>{
        console.log(event.target.value);
        setenterdDate(event.target.value)
    }
    let formsubmithendler=(event)=>{
        event.preventDefault();

        
        const expenseData={
            title:enteredTitle,
            Amount:enteredAmount,
            Date: new Date

        }
        props.onSaveExpenceData(expenseData);

        console.log(expenseData);
        setenterdtitle('');
        setenterdAmount('');
        setenterdDate('');
        
    }
    
return(
    <form onSubmit={formsubmithendler}>
        <div className="new-expense-controls">
        <div className="new-expense-controls"></div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titlechangehendler}/>  
        <div className="new-expense-controls"></div>
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={ Amountchangehendler}/>  
        <div className="new-expense-controls"></div>
        <label>
            
        </label>
        <input type="date" value={enteredDate} onChange={Datechangehendler}/> 
        <div className="new-expence-actions">
            <button type="SUBMIT">Add Expence</button>
            </div>
        </div>
        
    </form>
)



}
export default Expenceform;
