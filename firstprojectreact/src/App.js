
import './App.css';

import './style/style.css';

import logo from './logo.svg';
import Component from './Component';
import ClassComponent from './ClassComponent';

function App() {

  let firstName = "Will";
  let lastName = "Smith";

  let tab = [1,2, 3, 4, 5];


  return <div className="container">
          <Component/>
          {tab.map(num => <div>{num*2}</div>)}
          <ClassComponent/>
          
  </div>;

}

export default App;
