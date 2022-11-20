import './App.css';

// components
import Button from './components/Button';
import ComposeComponent from './components/ComposeComponent/ComposeComponent';
import StatefulComponent from './components/StatefulComponent';

import State from './State';

// helpers
// import { openNewTab } from './helpers/openNewTab';

function App() {
  const element_1 = <div>Hello, world! {5 + 5}</div>;
  const sum = 2 + 3;
  const todoItem = {
    title: 'truong',
    id: 1
  }
  
  return (
    <>
      <div className="App">
        {element_1}
        {sum}
      </div>
      <input type="text" />

      <br />

      <h2>Binding data in JSX</h2>
      Title: {todoItem.title} <br />
      Id: {todoItem.id}

      <br />
      <h2>Components</h2>
      <Button buttonText="Submit" />
      <Button 
        buttonText="Confirm" 
        type="button" 
        title="button" 
        onChange={() => {}} 
        onClick={() => {}} 
      />
      <div /> 

      <br />
      <h2>Stateful Components</h2>
      <StatefulComponent 
        name="tai" 
        component={<Button buttonText="stateful" />}
      />

      <br />
      <h2>Compose Components</h2>
      <ComposeComponent />


      <br />
      <h2>State</h2>
      <State />
    </>
  );
}

export default App;
