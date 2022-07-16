import React from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
  import Login from './pages/Login';
  import Main from './pages/Main';
  import Settings from './pages/Settings';
  import Signup from './pages/Signup';
  import Login_ from './pages/Login_';
  import Main_ from './pages/Main_';
  import Warning from './pages/Warning';

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
          path="/login_"
          element={<Login_ />}
        />
        <Route
          path="/main_"
          element={<Main_ />}
        />
        <Route
          path="/warning"
          element={<Warning />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;