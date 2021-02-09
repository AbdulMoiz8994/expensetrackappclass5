import React,{createContext,useReducer} from 'react';
//import Reducer
import {createReducer} from '../Context/UseReducer'

let initalTransaction=[
    {value: +600,desc: "cash"},
    {value: -50,desc: "Books"},
    {value: -300,desc: "Chocolate"},
    {value: -50,desc: "Chicken"},

]

export let  historyTransactionContext= createContext(initalTransaction);


//create a global provider
export const TranscationProvider=({children}) =>{
    let [state,dispatch]=useReducer(createReducer,initalTransaction)

    function AddTranscation(transaction){
       dispatch({
           type: "AddTransaction",
           payload: transaction
       })
    }
    return(    
    <historyTransactionContext.Provider value={{
          transaction: state,
          AddTranscation //or we write AddTransaction:AddTransaction same
    }}>
      {children}
    </historyTransactionContext.Provider>
    )
}