import React, { useEffect, useState } from 'react';
import './Main.css';
import AddRemoveBalance from '../Add_Remove_Balance/AddRemoveBalance';
import TransactionList from '../Transaction_List/TransactionList';

function Main() {
    const [transaction,setTransaction]=useState([])

    //getting props value from child to parent
    const transactionChange=(value)=>{
            setTransaction(transaction => [...transaction,value])            
    }
    //getting props value from child to parent

    //provides us updated transactionlist
    useEffect(() => {
        if (transaction) {            
         console.log(transaction)           
        }
      }, [transaction])
    //provides us updated transaction

    return (
        <div className="mainContainer">              
                <div className="mainbox">
                        <p className="mainTitle">Expense Tracker - Basic</p>
                       <AddRemoveBalance onTransactionChange={transactionChange} />
                       <TransactionList transactions={transaction}/>

                </div>
            </div>
    )
}

export default Main
