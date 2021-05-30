import React from 'react';
import Header from './components/header/w3schools-header.component';
import Headline from './components/headline/headline.component';
import './App.scss'
function App() {
  const tempArr = [{
    fName: 'Joe',
    lName:'Satte',
    email:'venkiq@gmail.com',
    age:34,
    onlineStatus: true
  }]
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="HTML" desc="The language for building web pages" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
