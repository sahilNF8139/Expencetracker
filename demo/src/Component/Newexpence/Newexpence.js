import React from"react"

import './Newexpence.css'
import Expenceform from "../Expence/Expenceform";

let NewExpence = ()=>{

 
       let saveExpenceDatahendler =
       (enteredExpenceData)=>{
        let expenseData={
             ...enteredExpenceData,
            id:Math.random().toString()
        }
        console.log(enteredExpenceData);
       }
        
    
    return(
        <div className="new-expence">
           <Expenceform 
           onSaveExpenceData=
           {saveExpenceDatahendler}/>
        </div>
    );
}

export default NewExpence;


