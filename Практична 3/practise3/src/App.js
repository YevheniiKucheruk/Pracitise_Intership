import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Palettes from './components/Palettes';
import Footer from './components/Footer';
import PalettesMain from './components/PalettesMain';

function App(){
  const [palette_id,SetID]=useState('none')
  
  return(
    palette_id==='none'?
    <div>
      <Header class='Header' title_class='header_title' text='Palettes'/>
      <Palettes func={SetID}/>
      <Footer/>
    </div>
    :
    <div>
      <Header func={SetID} class='HeaderMain' isButton={true} but_class='button_back' but_title='Back'/>
      <PalettesMain ID={palette_id} alert_class={'alert_class'}/>
    </div>
  )
}

export default App