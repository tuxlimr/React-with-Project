import React from 'react';

function App() {
  return (<div>
    <h3>hello</h3>
    <h2>'hello how are you'</h2>
    <Folder name="Desktop" >
       <h4> Some Stuff</h4>
       <h4> Some Stuff</h4>
    </Folder>
    <Folder name="Applications" />
    <File name="Dogs.jpg" />
    <File name="Cats.jpg" />
  </div>);

}
const Folder = (props) => {
  console.log(props)
  return (<div>
    
    <h4> {props.name} </h4>
  </div>
  )

}

const File = (props) => {
  return (<div>
    <div> {props.name} </div>
  </div>
  )

}


export default App;
