import React,{ useState } from 'react';

import { getByPlaceholderText, getByTitle } from "@testing-library/react";

function Expenceitem(props){
    let [Newtitle, setNewTitle]=useState();

      let [title, setTitle]=useState("Click ME");

    let clickhandler=(props)=>{
        setTitle(Newtitle);
    }
    let changehendler=(event)=>{
        setNewTitle(event.target.value);
    }
        
    
const month=props.date.toLocaleString('en-US',{month:'long'});
const year=props.date.getFullYear();
const Day=props.date.toLocaleString('en-US',{day:'2-digit'});
const Name=props.Name

    return(
<div className="expence-item">
<div>
<div className="attach">{ month }</div>
<div>{ year }</div>
<div>{ Day }</div>  
<div className="nick">{ Name }</div>

</div>
<div className="expence-item__description">

<div>{props.title}</div>
<div className="expence-item__price"> ${props.amount}</div>
{/* <input type='text' value={Newtitle} onChange={changehendler}/>
<button className='btn' onClick={() => clickhandler(props.title)}>{title }</button> */}
</div>
</div>

    );
}


export default Expenceitem;