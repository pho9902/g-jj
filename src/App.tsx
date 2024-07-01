import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "components/First";
import Main from "components/Main";
import GameList from "components/GameList";
import Morris from "components/Games/Morris";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/gamelist/:players" element={<GameList />}></Route>
          <Route path="/morris" element={<Morris />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
