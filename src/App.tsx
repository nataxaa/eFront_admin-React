import React from 'react';
import { Sidebar } from './components/sidebar';
import { Dashboard } from './pages/dashboard';
import { Layout } from './global';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Wallet } from './pages/wallet';

function App() {
  return (
    <Layout>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>  
          <Route path='/wallet' element={<Wallet/>}/>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
