import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "components/First";
import Main from "components/Main";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
