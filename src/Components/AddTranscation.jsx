import React,{useState,useContext} from 'react'

import {historyTransactionContext} from '../Context/ContextApi'


export const AddTranscation = () => {

    let[newdesc,setdesc]=useState(" ");
    let[newvalue,setvalue]=useState(0)
    
    let {AddTranscation}=useContext(historyTransactionContext)


const handleAddition=(e) =>{
    e.preventDefault();

    console.log(newdesc,newvalue)
    AddTranscation({
        transaction: newdesc,
        transaction: newvalue

})
setdesc(" ");
setvalue(0);

}
    return (
        <div className="newTranscaction">
            <p>Add New Transcation</p>
            <form className="inputdetail"  onSubmit={handleAddition}>
                <label>
                    Enter Description <br/>
                    <input type="text" placeholder="Please Enter Purpose" value={newdesc}  onChange={(e) => setdesc(e.target.value)} required/>
                </label>
                <br/>
                <label>
                    Amount <br/>
                    <input type="number" placeholder="Please Enter Value" value={newvalue} onChange={(e) => setvalue(e.target.value)} required/>
                </label>
                <br/><br/>
                <input type="button" className="button" value="Add Transcation"/>
            </form>
        </div>
    )
}
