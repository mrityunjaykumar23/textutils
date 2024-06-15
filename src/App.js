
// import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";

// let name="mkp"
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
          setalert({
            msg:message,
            type:type
          })
          setTimeout(() => {
            setalert(null);
          }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enable", "success")
        document.title="Textutils - Dark Mode"
        // setInterval(() => {
        //   document.title = "TextUtils  is Amazing";   /*to show how blinking of title happen to attract users*/
        // }, 2000);
        // setInterval(() => {
        //   document.title = " Install TextUtils ";
        // }, 1500);

    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
        document.title="Textutils - light Mode"

    }
  }
  return (
    <>
{/* <Navbar title="my website" aboutText="mrityunjay"/> */}
  {/* <Router> */}
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
<Alert alert={alert}/> 
<div className="container"> 
{/* <Textform heading="Enter the text to analyze"/> */}
<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
  {/* <Routes>
<Route exact path="/"element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
<Route exact path="/About" element={<About/>}/>
            {/* <About/> */}
          {/* </Route> */} 
            {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route> */}
          {/* </Routes> */}
{/* <About/> */}
</div>
{/*  </Router> */}
    </>
  );
}

export default App;
