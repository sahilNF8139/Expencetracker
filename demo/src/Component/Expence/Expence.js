import React from 'react';

import './Expence.css'

import Expenceitem from './Expenceitem';

function Expence(props){
    return(
        <div className="expence">
    
             <Expenceitem 
    date={props.item[0].date}
    Name={props.item[0].Name}
    title={props.item[0].title}
    amount={props.item[0].amount} ></Expenceitem>
    <Expenceitem 
    date={props.item[1].date}
    Name={props.item[1].Name}
    title={props.item[1].title}
    amount={props.item[1].amount} ></Expenceitem>
    <Expenceitem 
    date={props.item[2].date}
    Name={props.item[2].Name}
    title={props.item[2].title}
    amount={props.item[2].amount} ></Expenceitem>
    <Expenceitem 
    date={props.item[3].date}
    Name={props.item[3].Name}
    title={props.item[3].title}
    amount={props.item[3].amount} ></Expenceitem>
    <Expenceitem 
    date={props.item[4].date}
    Name={props.item[4].Name}
    title={props.item[4].title}
    amount={props.item[4].amount} ></Expenceitem>
        </div>
    )
}

export default Expence;
    