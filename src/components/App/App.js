import React from 'react';
import { Main } from '../Main/main';
import { Footer } from '../Footer/footer';
import './../../style/App.scss';

function App() {

  // State
  const [advice, setAdvice] = React.useState([0, 'Click the button to see new advice']);

  return (
    <React.Fragment>
      <Main
        advice={advice}
        setAdvice={setAdvice}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
