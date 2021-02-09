import React,{useContext} from 'react'

import {historyTransactionContext} from '../Context/ContextApi'

export const Balance = () => {

const {transaction}=useContext(historyTransactionContext)
// console.log(transaction)

const totalValue=transaction.map((number) =>  number.value)
// console.log(totalValue)
 const result= totalValue.reduce((acc,number) => acc += number) // this is like this acc + number=number
//  console.log(result)

    return (
        <div className="balance">
            <p>YOUR BALANCE</p>
             <p className="value">${result}.00</p>
        </div>
    )
}
