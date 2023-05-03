import { Routes, Route} from "react-router-dom";
import { Layout } from "./Modules/Layout/Layout";
import {Main} from "./Modules/Main/Main"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
