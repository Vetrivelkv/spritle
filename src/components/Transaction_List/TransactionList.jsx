import React from 'react';
import './TransactionList.css';

function TransactionList(props) {
    console.log(props)
    return (
        <div className="transactionContainer">
            <div className="transactionBox">
            <p>Transactions:</p>
            {props.transactions.map((transaction) =>
             <div key={transaction.id}>
                 {transaction.date} - {transaction.amount} - {transaction.type}                                  
              </div>   
             )
             }
            </div>            
        </div>
    )
}

export default TransactionList
