import React from 'react';

function App() {
  return  (<div>
    <h3>hello</h3>
    <h2>'hello how are you'</h2>
    <Folder food="cake" drink="coffee" />
  </div>);

}

const Folder = (props) => {
  console.log(props)
  const name = 'my_desktop'
  return <h4> {name} </h4>

}


export default App;
