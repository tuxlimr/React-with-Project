import React, { useState  } from 'react';

function App() {
  return (<div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="Arijit Singh.mp3" />
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
  const direction = isOpen ? 'down' : 'right';
  
  const handClick = () => {
    setIsOpen(!isOpen);
  };
  
  
  
  return (<div>
    <span onClick={handClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      
      </span>
    {name}

    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children :  null}
       </div>
  </div>
  )
}

const File = (props) => {
  const {name} = props;
  const fileExtention = name.split('.')[1]
  const fileIcons ={
    mp3 : 'headphones',
    jpg : 'file image',
    png: 'file image outline',
  }
  return (<div>
    <i className={`${fileIcons[fileExtention]} icon`}></i>
    {name}
  </div>
  )
}


export default App;
