import React from 'react'
import './App.css';

//import Components
import {Heading} from './Components/Heading'
import {Balance} from './Components/Balance';
import {AccountSummary} from './Components/AccountSummary'
import {AddTranscation} from './Components/AddTranscation'
import {History} from './Components/History'
import {Transaction} from './Components/Transaction'


function App() {
  return (
    <div>
     <Heading/>
     <Balance/>
     <AccountSummary/>
     <History/>
     <AddTranscation/>
    </div>
  );
}

export default App;
