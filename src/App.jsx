
import { useState } from 'react'
import './App.css'
import Wheather from './componates/Wheather'
import sun from './icons/sun-day-weather-symbol_icon-icons.com_73146 (1).png'
import moon from './icons/moon_icon-icons.com_48261.png'
let style;
function App() {
  let [show,setShow]=useState(false)
 let state= show==true?<img src={sun} alt="" />:<img src={moon} alt="" />
        
          
    let styleBox=show;        
function handleClick()
{
  show==true? setShow(false): setShow(true)
   
style=show==true?' bg-blue-600':'bg-gray-700';
}
  return (
    <>
    <div className= {`main ltr ${style}`} >
      <button value={show} className='lightDark' onClick={handleClick}>
        
          {state}
      </button>
      <Wheather style={styleBox}/>
    </div>
     
     
     
    </>
  )
}

export default App
