import { Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
function App() {
  return (

    <div className="App">
      <Routes>
          <Route path="/" element={<LoginView/>} />
          <Route path="/home" element={<HomeView/>} />
        </Routes>
    </div>
  );
}

export default App;
