import React from 'react';

function App() {
  return (<div>
    <Folder name="Desktop">
      <File name="Dogs.jpg" />
      <File name="Cats.jpg" />
    </Folder>
    <Folder name="Applications" />

  </div>);

}
const Folder = (props) => {
  console.log(props)
  return (<div style= {{border :'2px solid blue'}}>
     {props.name} 
     {props.children} 
  </div>
  )

}

const File = (props) => {
  return (<div>
   {props.name} 
  </div> 
  )
}


export default App;
