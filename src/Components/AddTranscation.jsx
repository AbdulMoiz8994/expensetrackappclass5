import React,{useState,useContext} from 'react'

import {historyTransactionContext} from '../Context/ContextApi'


export const AddTranscation = () => {

    let[newdesc,setdesc]=useState("");
    let[newvalue,setvalue]=useState(0)
    let {AddTranscation}=useContext(historyTransactionContext)
 console.log(AddTranscation)

const handleAddition=(event) =>{
     event.preventDefault()
     console.log(newdesc,newvalue)
    // AddTranscation({
    //     value: newvalue,
    //     desc: newdesc
    // })
}
    return (
        <div className="newTranscaction">
            <p>Add New Transcation</p>
            <form className="inputdetail"  onSubmit={handleAddition}>
                <label>
                    Enter Description <br/>
                    <input type="text" placeholder="Please Enter Purpose" value={newdesc} onChange={(ev) => setdesc(ev.target.value)}/>
                </label>
                <br/>
                <label>
                    Amount <br/>
                    <input type="number" placeholder="Please Enter Value"  value={newvalue} onChange={(ev) => setvalue(ev.target.value)}/>
                </label>
                <br/><br/>
                <input type="button" className="button" value="Add Transcation" />
            </form>
        </div>
    )
}
