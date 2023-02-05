import React from 'react';
import People from './People';
import Companies from './Companies';


const App = () => 
<div className='section'>
        <h1 className='title'> Labor Department 2.0 </h1>
        <div className='columns'>
        <People />
        <Companies />
        </div>
      </div>

export default App;