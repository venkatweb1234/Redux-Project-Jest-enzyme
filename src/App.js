import React from 'react';
import Header from './components/header/w3schools-header.component';
import Headline from './components/headline/headline.component';
import './App.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts !" />
      </section>
    </div>
  );
}

export default App;
