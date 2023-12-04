import React from 'react';
import { Sidebar } from './components/sidebar';
import { Dashboard } from './pages/dashboard';
import { Layout } from './global';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Wallet } from './pages/wallet';
import { Transactions } from './pages/Transactions';
import { Support } from './pages/support';

function App() {
  return (
    <Layout>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>  
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/transaction' element={<Transactions/>}/>
          <Route path='/support' element={<Support/>}/>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
