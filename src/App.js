import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  // Link,
  Route,
  Routes,
} from "react-router-dom";

    function App() {
      const [mode, setMode] = useState('dark')
      const [alert, setAlert] = useState(null)

      const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
      }

      const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = "#042743";
         showAlert("Dark Mode has beeen enabled", "success")
       document.title = 'TextUtils - Dark Mode'
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = "white";
         showAlert("Light Mode has beeen enabled", "success")
         document.title = 'TextUtils -Light Mode'
   
        }
      }

              return (
              <>
              <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert} />
            {/* <div className="container my-3">
                    <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
            <About />
            </div> */}


      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
              </>       
  );
}

export default App;
