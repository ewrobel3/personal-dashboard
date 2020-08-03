import React from 'react';
import './App.css';

import Clock from "./Clock";
import Weather from "./Weather";
import Calendar from "./Calendar";
import News from "./News";
import ToDo from "./ToDo";
import Music from "./Music";

function App() {
  return (
    <main> 
      <div id="header">
        <Clock/>
        <Weather/>
      </div>
      <section>
        <div id="news">
          <h3>News</h3>
          <News/>
        </div> 
        <div id="todomain">
          <h3>To Do</h3>
          <ToDo/>
        </div>
      </section>
    </main>
  );
}

export default App;
