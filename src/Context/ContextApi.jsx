import React,{createContext} from 'react';

let initalTransaction=[
    {value: +500,desc: "cash"},
    {value: -50,desc: "Books"},
    {value: -300,desc: "Chocolate"}
]

export let  historyTransactionContext= createContext(initalTransaction);