import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import { Parser } from 'nearley';
import Grammar from '../grammars/arithmetic.ne';


console.log(Parser);
console.log('-----01---');
console.log(Grammar);
console.log('-----02---');
console.log(Grammar.ParserRules);
console.log('-----03---');
console.log(Grammar.ParserStart);
console.log('-----04---');
var parser = new Parser(Grammar.ParserRules, Grammar.ParserStart);
console.log('-----05---');
console.log(parser);
console.log('-----06---');
parser.feed('1 + 3');
console.log('-----07---');
console.log(parser.results);
console.log('-----08---');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/scripts/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
