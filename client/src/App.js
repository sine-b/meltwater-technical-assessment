import { useState, useEffect } from 'react';

import UserInput from './components/UserInput/UserInput';
import RedactedDisplay from './components/RedactedDisplay';

import { testGetCensor } from './api/api';

import './App.css';

function App() {
  const [doc, setDoc] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   testGetCensor().then((response) => {
  //     setDoc(response);
  //     setIsLoading(false);
  //   });
  // }, []);

  return (
    <div className="App">
      <UserInput onFileCensored={setDoc} handleLoading={setIsLoading} />
      <RedactedDisplay isLoading={isLoading} text={doc} />
    </div>
  );
}

export default App;
