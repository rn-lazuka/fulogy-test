import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import InfoPage from './components/infoPage/InfoPage';
import Menu from './components/header/menu/Menu';

function App() {
  const [infoPage, setInfoPage] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
      <div className="App">
        <Header setMenu={setMenu}/>
        {menu && <Menu/>}
        {infoPage ? <InfoPage setInfoPage={setInfoPage}/> : <Main setInfoPage={setInfoPage}/>}
        <Footer/>
      </div>
  );
}

export default App;
