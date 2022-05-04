import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthenticationScreen from "./app/components/AuthenticationScreen";
import Header from "./app/components/Header";

import Home from "./app/components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AuthenticationScreen />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
