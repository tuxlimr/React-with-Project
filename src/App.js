import React from 'react';

function App() {
  return  (<div>
    <h3>hello</h3>
    <h2>'hello how are you'</h2>
    <Folder />
  </div>);

}

const Folder = () => {
  const name = 'my_desktop'
  return <h4> {name} </h4>

}


export default App;
