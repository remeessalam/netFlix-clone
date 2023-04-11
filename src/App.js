import React from 'react';
import NavBar from './components/Navbar/NavBar'
import {action,originals} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netfelix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}   

export default App;
