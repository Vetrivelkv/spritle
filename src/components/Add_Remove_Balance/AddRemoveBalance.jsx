import React, { useState } from 'react';
import './AddRemoveBalance.css';
import { Form,Button } from 'react-bootstrap';

export default function AddRemoveBalance(props) {
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(0)    
    const [id,setId]=useState(0)
    const[valid,setValid]=useState(0)
    
    const onChangeHandler = (event) => {
        setAmount(event.target.value);
        //error handling onchange
        if(event.target.value !=="")
        {
          setValid(0)
        }
        else{
          setValid(1)
        }
        //error handling onchange
      };
      
      const submit=(e,type)=>{
            e.preventDefault();    
            
            //used as keys in map function in transactionlist page
                 setId(id+1)
            //used as keys in map function in transactionlist page

                 let params=""
                 //error handling onsubmit
                 if(amount === "" )
                 {
                   setValid(1)
                 }
                 else
                 {
                   setValid(0)
                  if(type === "Add")
                  {
                   setBalance(Number(balance)+Number(amount))     
                                  
                   params={
                       id,
                       amount,
                       date:new Date().toISOString(),
                       type:"Add"
                   }
                  }
                  else{
                   setBalance(Number(balance)-Number(amount))     
                                  
                   params={
                       id,
                       amount,
                       date:new Date().toISOString(),
                       type:"Remove"
                   }
                  }
                  props.onTransactionChange(params) 
                 }
                 
            
                                                  
             
            
      }
   
    return (
        <div className="addRemoveContainer">
            <div className="addRemoveBox">
                <div>
                    Balance: {balance}
                </div>
                <Form>
              <Form.Group hasValidation>                
              <Form.Control type="number"
               required
               placeholder="Amount"
               isInvalid={valid}
               name="amount" value={amount} 
               onChange={onChangeHandler}
                    />
              
                  <Form.Control.Feedback type="invalid">
                    Please Enter A Value.
                  </Form.Control.Feedback>
                  </Form.Group>

                  <Button  onClick={e=>submit(e,'Add')}>
                   Add
                 </Button>

                 <Button   onClick={e=>submit(e,'remove')}>
                   Remove
                 </Button>
                  </Form>
            </div>            
        </div>
    )
}
