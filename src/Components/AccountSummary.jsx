import React,{useContext} from 'react'

import {historyTransactionContext} from '../Context/ContextApi'



export const AccountSummary = () => {
    
    const {transaction}=useContext(historyTransactionContext)
     console.log(transaction)

     const totoalAmount= transaction.map((transactions) => transactions.value)
    //  console.log(totoalAmount)

 const income=totoalAmount.filter((values) => values > 0).reduce((acc,values)=> values= values + acc ) // The values=acc + values
//  console.log(income)

 const expense=totoalAmount.filter((value) => value < 0).reduce((acc,value) => acc +=value) 
//  console.log(expense)

    return (
        <div className="main-accountSummmary">
            <div>
                <h4>INCOME</h4>
                <p className="plus">${income}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className="minus">${expense}</p>
            </div>
        </div>
    )
}
 