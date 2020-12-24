import React, { useState  } from 'react';

function App() {
  return (<div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="Arijit Singh.jpg" />
      </Folder>
      <File name="Dogs.jpg" />
      <File name="Cats.jpg" />
    </Folder>
    <Folder name="Applications" />
  </div>)
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const {name, children} = props;

  const handClick = () => {
    setIsOpen(!isOpen);
  };



  return (<div>
    <span onClick={handClick}>{name}</span>
    
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children :  null}
       </div>
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
