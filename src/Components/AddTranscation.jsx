import React from 'react'

export const AddTranscation = () => {
    return (
        <div className="newTranscaction">
            <p>Add New Transcation</p>
            <form className="inputdetail">
                <label>
                    Enter Description <br/>
                    <input type="text" placeholder="Please Enter Purpose"/>
                </label>
                <br/>
                <label>
                    Amount <br/>
                    <input type="number" placeholder="Please Enter Value"/>
                </label>
                <br/><br/>
                <input type="button" className="button" value="Add Transcation"/>
            </form>
        </div>
    )
}
