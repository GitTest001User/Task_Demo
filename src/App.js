import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTopNavigation from './Include/ScrollToTopNavigation'

import Loader from './Include/Loader';
import Header from './Include/Header';
import Footer from './Include/Footer';


const Home = React.lazy(() => import('./Components/Home'))


const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
       <Header/>
      <Routes>
       
        <Route path='/' element={<Home />} />
      
        
      </Routes>
      <ScrollToTopNavigation/>
      {/* <Footer/> */}
    </Suspense>

  );
}

export default App;
