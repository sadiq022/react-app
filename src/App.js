// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');     //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
      // setInterval(()=>{
      //   document.title = "TextUtils is amazing."
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now"
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "primary");
      document.title = "TextUtils - LightMode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <div className="container my-3">
        <Routes>
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze!" mode={mode}/>} />
        </Routes>
      </div> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze!" mode={mode}/>
    {/* </Router> */}
    </>
  );
}

export default App;
