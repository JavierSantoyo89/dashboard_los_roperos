import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from '../components/Error404';
import Dashboard from '../pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' exact={true} element={<Dashboard />} />


        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
