import React,{createContext,useReducer} from 'react';
//import Reducer
import {createReducer} from '../Context/UseReducer'

let initalTransaction=[
    {id: 0,value: +600,desc: "cash"},
    {id:1,value: -50,desc: "Books"},
    {id:2,value: -300,desc: "Chocolate"},
    {id:3,value: -50,desc: "Chicken"},

]

export let  historyTransactionContext= createContext(initalTransaction);


//create a global provider
export const TranscationProvider=({children}) =>{
    let [state,dispatch]=useReducer(createReducer,initalTransaction)

    function AddTranscation(transObj){
        console.log(transObj);
       dispatch({
           type: "AddTransaction",
           payload:{
               desc: transObj.desc,
               value: transObj.value
           } 
       })
    }

    function DelTransaction(id) {
        // console.log(id);
        dispatch({
            type: "DelTransaction",
            payload: id
        })
    }
    return(    
    <historyTransactionContext.Provider value={{
          transaction: state,
          AddTranscation, //or we write AddTransaction:AddTransaction same
          DelTransaction
    }}>
      {children}
    </historyTransactionContext.Provider>
    )
}