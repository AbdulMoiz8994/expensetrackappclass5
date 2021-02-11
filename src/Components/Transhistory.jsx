import React, { useContext } from 'react'

import {historyTransactionContext} from '../Context/ContextApi'
import {Transaction} from './Transaction'

export const Transhistory = () => {
    const  {transaction}=useContext(historyTransactionContext)
    return (
        <div>
            <ul>
                {transaction.map((transcation) => 
                            <Transaction key={transcation.id} transcation={transcation}/>
                )}
            </ul>
        </div>
    )
}
