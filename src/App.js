import React from 'react'
import './App.css';

//import Components
import {Heading} from './Components/Heading'
import {Balance} from './Components/Balance';
import {AccountSummary} from './Components/AccountSummary'
import {AddTranscation} from './Components/AddTranscation'
import {History} from './Components/History'
// import {Transaction} from './Components/Transaction'

import {TranscationProvider} from './Context/ContextApi'
// import { Transhistory } from './Components/Transhistory';


function App() {
  return (
    <TranscationProvider>
    <div>
     <Heading/>
     <Balance/>
     <AccountSummary/>
     <History/>
     {/* <Transhistory/> */}
     <AddTranscation/>
    </div>
    </TranscationProvider>


  );
}

export default App;
