import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Game from "./routes/Game";
import ContainerGame from "./routes/ContainerGame";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/results" element={<ContainerGame/>}></Route>
      <Route path="/game" element={<Game/>}></Route>
    </Routes>
    </>
    
  )
}

export default App;
