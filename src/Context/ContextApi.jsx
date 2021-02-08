import React,{createContext,useReducer} from 'react';
//import Reducer
import {createReducer} from '../Context/UseReducer'

let initalTransaction=[
    {value: +600,desc: "cash"},
    {value: -50,desc: "Books"},
    {value: -300,desc: "Chocolate"},

]

export let  historyTransactionContext= createContext(initalTransaction);

export const TranscationProvider=({children}) =>{
    let [state,dispatch]=useReducer(createReducer,initalTransaction)

    function AddTranscation(transObj){
       dispatch({
           type: 'AddTransaction',
           payload:{
            desc: transObj.desc,
               value: transObj.value,

           },
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