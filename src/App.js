import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './Pageviews/Home/HomeScreen';
import LoginScreen from './Pageviews/Onboarding/LoginScreen';
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth"
import { useEffect } from 'react';
import { useState } from 'react';

const theme = createTheme();


function App() {

  const [authUser, setAuthUser] = useState(null);

  useEffect(()=> {
    const listen = onAuthStateChanged(auth, (user)=> {
      if(user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return ()=>{
      listen();
    }
  },[])

  return (
    
    <ThemeProvider theme={theme}>
      
      <div className="App">
        
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={authUser ? <HomeScreen /> : < LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
          </Routes>
        
        </BrowserRouter>
      
      </div>
    
    </ThemeProvider>

  );
}

export default App;
