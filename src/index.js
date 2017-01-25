import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component. This component should produce some HTML

const App = () => {
  return <div> Hi! </div>;

}

// Take this compoent's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
