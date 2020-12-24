import React from 'react';

function App() {
  return (<div>
    <Folder name="Desktop" isOpen={true}>
      <Folder name="Music">
        <File name="Arijit Singh.jpg" />
      </Folder>
      <File name="Dogs.jpg" />
      <File name="Cats.jpg" />
    </Folder>
    <Folder name="Applications" />

  </div>);

}
const Folder = (props) => {
  console.log(props)
  return (<div>
    {props.name}
    <div style={{ marginLeft: '17px' }}>
      {props.isOpen ? props.children:null} </div>
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
