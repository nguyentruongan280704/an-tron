import LoginContainer from "./pages/LoginContainer";
import RegisterContainer from "./pages/RegisterContainer";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <LoginContainer/> */}
      {/* <RegisterContainer/> */}
      <Routes>
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/register' element={<RegisterContainer />} />
      </Routes>
    </>
  );
}

export default App;
