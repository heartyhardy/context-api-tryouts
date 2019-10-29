import React, { useState, useMemo } from 'react';
import './App.css';

import PersonList from './components/person-list';
import PersonsContext from './context/persons';

function App() {

  const [persons, setPersons] = useState(["Ben", "Martha", "Robin", "Meven"]);

  const personsMemo = useMemo(() => ({ persons, setPersons }), [persons, setPersons]);

  return (
    <div className="App">
      <PersonsContext.Provider value={personsMemo}>
        <PersonList />
      </PersonsContext.Provider>
    </div>
  );
}

export default App;
