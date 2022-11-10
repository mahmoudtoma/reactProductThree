import React, { useState } from 'react'
import NavBar from './component/NavBar';
import Header from './component/Header';
import Menu from './component/Menu';
import Box from './component/box';
import { Data } from "./component/Data";

function App() {
  const [DataMenu, setDataMenu] = useState(Data);

  // Filter menu
  const filterData = (type) => {
    if (type === 'all') {
      setDataMenu(Data)
    } else {
      const dataAray = Data.filter((Data) => Data.type === type)
      setDataMenu(dataAray)
    }
  }
  // Filter Search 
  const filterSearch = (word) => {
    if (word !== '') {
      const dataArry = Data.filter((Data) => Data.name === word)
      setDataMenu(dataArry)
    }
  }
  return (
    <div >
      <NavBar filterSearch={filterSearch} />
      <div className='container'>
        <Header />
        <Menu filterData={filterData} />
        <Box DataMenu={DataMenu} />
      </div>
    </div>
  );
}

export default App;
