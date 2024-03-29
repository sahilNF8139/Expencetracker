import "./form.css"
import{useState} from 'react'

function Form(){
    const[enteredName,setEnteredName]=useState("")
    const[enteredNumber,setEnteredNumber]=useState("")
    const[enteredAddres,setEnteredAddres]=useState("")
    
    const[NameError,setNameEroor]=useState("")
    const[phoneNumberError,setphoneNumberError]=useState()
    const[AddresError,setAddresError]=useState("")


    function Namechangehandler(event){ 
        const regix=/^[a-zA-Z]*$/;
        if(regix.test(event.target.value)){
          setEnteredName(event.target.value);
        setNameEroor("");

      }else{
        // setEnteredName("")
        setNameEroor("only for careactor only")
      }
    


        // if(event.target.value.length>=3 ){
        //     setNameEroor("");
        // }else if (event.target.value==="") {
        //     setNameEroor(" please enter name ");
        // }
        // else{
        //     setNameEroor("min careactors 3 only");
        // }
        // // setEnteredName(event.target.value)
        // console.log(event.target.value)
     }


     function Numberchangehandler(event){
        const numberregex=/^[0-9]*$/
        if (numberregex.test(event.target.value)) {
            setEnteredNumber(event.target.value)
            setphoneNumberError("")
        }else{
            // setEnteredNumber("")
            setphoneNumberError("only for number only")
            
        }
        // if(event.target.value<=10){
        //     setphoneNumberError("");

        // }else{
        //     setphoneNumberError("please enter your Number");
        // }
        // setEnteredNumber(event.target.value)
        // console.log(event.target.value) 
    }
        function Addreschangehandler(event){ 
            // const addresregex= /^[a-zA-Z]+$/;
            // if (addresregex.test(event.target.value)) {
            //     setEnteredAddres(event.target.value)
            // }else{
            //     setAddresError("only for caractor only")
            // }
            if(event.target.value.length>=3){
                setAddresError("");
    
            }else{
                setAddresError("please enter your Addres");
            }

        setEnteredAddres(event.target.value)
        // console.log(event.target.value)
    }
    function SubMit(event){
        event.preventDefault()
        if(enteredName){
            setNameEroor("")

        }else{
            setNameEroor("please enter name")
        }
         
        if(enteredNumber){
            setphoneNumberError("")
        }else{
            setphoneNumberError("please enter number")
        }
        // console.log(enteredNumber);



        
        if(enteredAddres){
            setAddresError("")
        }else{
            setAddresError("please enter Addres")
        }
       console.log(enteredAddres);
       if (enteredName&& enteredName.length>=3
        &&
        enteredNumber &&enteredNumber.length>=10
        && enteredAddres && enteredAddres.length>=3  
        ){
            console.log("form submited",{
                enteredName: enteredName ,
                enteredNumber:enteredNumber,
                enteredAddres:enteredAddres});
    }
        }
          
        
        // console.log(
        //     enteredName, enteredNumber,enteredAddres
        // );

return(
        <div className="container">
         
            <form onSubmit={SubMit}>
                <div><lable>Name:</lable>
                <input type="text"   placeholder="Enter your Name"  value={enteredName} onChange={Namechangehandler}></input></div>
                {NameError&&<span className="er">{NameError}</span>}    
                <div>
                    <br/>
                    <lable >Phone Number:</lable>
                    <input type="text" placeholder="Enter your Number" maxLength={10} value={enteredNumber}onChange={Numberchangehandler} ></input>
                </div>
                {phoneNumberError&&<span className="er">{phoneNumberError}</span>}
                <div>
                    <br/>
                    <lable>Addres:</lable>
                    <input type="text" placeholder="Enter your Addres" value={enteredAddres}onChange={Addreschangehandler}></input>
                </div>
                {AddresError&&<span className="er">{AddresError}</span>}
                <br/>

                <div>
                    <button className="btn">SubMit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;               

