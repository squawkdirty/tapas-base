import { Welcome } from "./Welcome/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
