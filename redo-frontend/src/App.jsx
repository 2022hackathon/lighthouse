import React from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
  import Login from './pages/Login';
  import Main from './pages/Main';
  import Settings from './pages/Settings';
  import Signup from './pages/Signup';
  import SetUpSocials from './pages/SetUpSocials';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/sign-up"
          element={<Signup />}
        />
        <Route
          path="/main"
          element={<Main />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
        <Route
          path="/setupsocials"
          element={<SetUpSocials />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;