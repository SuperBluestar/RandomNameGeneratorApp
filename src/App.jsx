import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './layout/HomeLayout';
import styled from 'styled-components';

import AccountContextProvider from './context/AccountContext';

import Topbar from './layout/Topbar';

const Logo = styled.header`
  width: 3rem;
  height: 3rem;
`;

const App = () => {
  return (
    <div id="app" className="App">
      <AccountContextProvider>
        <BrowserRouter>
          <Topbar></Topbar>
          <Routes>
            <Route path="/" element={<HomeLayout />} >
              <Route path="" element={<Home />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AccountContextProvider>
    </div>
  );
}

export default App;
