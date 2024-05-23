import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter,Route,  Routes,Navigate} from 'react-router-dom';
import HomePage from './scenes/homePage/Home';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import {useSelector,useDispatch} from 'react-redux';
import { useMemo } from 'react';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {
  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);




  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
