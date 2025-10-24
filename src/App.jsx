import React from 'react';
import Header from './Components/Landing Page in React/Header';
import Home from './Components/Landing Page in React/Home';
import Footer from './Components/landing page in React/Footer';
import ComponentA from './Props Parent to Child data Passing/ComponentA';



const App = () => {
  let b=20;
  b=b+10;
  return (
    <div>
     {/* <Header />
     <Home />
     <Footer />
       */}
       <h1>Parent component b value is:{b}</h1>

       <ComponentA b={b} />
    </div>
  );
};

export default App;
