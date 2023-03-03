import React from 'react';
import NavBar from './components/NavBar';
import LandPage from './components/landing-page/LandPage';
import Footer from './components/Footer'
import './App.css'
import { Box } from '@chakra-ui/react';



function App() {
  return (
    <div className='main-app'>
    <Box>
      <section className='navContainer'>
        <NavBar />
      </section>
      <section className='bodyPage'>
          <LandPage />
      </section>
      <div className='footer'>
          <Footer />
      </div>
    </Box>  
    </div>
  )
}

export default App