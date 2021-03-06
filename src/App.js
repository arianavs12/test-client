import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import User from "./components/User";
import './App.css'

function App() {
  return (
    <div className="App">
      <User/>
      <Routes>
        {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;