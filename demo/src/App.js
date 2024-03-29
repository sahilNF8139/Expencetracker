import React from 'react';
import Newexpence from './Component/Newexpence/Newexpence'
import Expence from'./Component/Expence/Expence.js'
import './Component/Expence/Expenceitem.css';
import './Component/App.css'
import Expenceform from './Component/Expence/Expenceform.js';




function App(){
let expence=[
    {
        id:'e1',
        title:'school fees',
        amount:'300',
        date: new Date(2020, 11 ,19),
        Name:'sahil'
        
    },
        {
        id:'e2',
        title:'Tution fees',
        amount:'500',
        date: new Date(2021, 10 ,19),
        Name:'sahil'
    },
        {
        id:'e3',
        title:'Room rent',
        amount:'700',
        date: new Date(2020, 1 ,19),
        Name:'sahil'
    },
        {
        id:'e4',
        title:'other',
        amount:'100',
        date: new Date(2019, 11 ,19),
        Name:'sahil'
    },
    {
        id:'e5',
        title:'tution Fees',
        amount:'800',
        date: new Date(2018, 7 ,19),
        Name:'sahil'
    }

]

    return(<div className='hii'>
    {/* <h2 className='heading'>Let's get start</h2> */}
    
<Newexpence/>
<Expence item={expence}/>

    </div>  
    )
    ;}
            
    export default App;
