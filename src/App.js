import React from 'react';

function App() {
  return (<div>
    <h3>hello</h3>
    <h2>'hello how are you'</h2>
    <Folder name="cake" name1="hui" />
    <Folder name="cake2" />
  </div>);

}

const Folder = (props) => {
  return (<div>
    <h4> {props.name} </h4>
    <h4> {props.name1} </h4>
  </div>
  )

}


export default App;
