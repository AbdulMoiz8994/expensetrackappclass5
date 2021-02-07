import React,{useContext} from 'react'
import {historyTransactionContext} from '../Context/ContextApi'
export const History = () => {
    let  transaction=useContext(historyTransactionContext)
    // let transaction=[
    //     {value: +500,desc: "cash"},
    //     {value: -20,desc: "Books"},
    //     {value: -300,desc: "Chocolate"}
    // ]
    return (
        <div className="history">
            <p>History</p>
            <hr/>
            <ul className="transaction-list">
                {transaction.map((transObj, ind) =>{
                    return(
                    <li key={ind}>
                    <span>{transObj.desc}</span>
                    <span>{transObj.value}</span>
                </li>
                )})}
                
            </ul>
        </div>
    )
}
