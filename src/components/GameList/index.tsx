import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GameList() {
  const params = useParams();
  const [players, setPlayers] = useState(params.players);

  const dummy = [{ title: "오목" }, { title: "바둑" }, { title: "장기" }];

  useEffect(() => {
    setPlayers(params.players);
    console.log(params);
  }, [params]);

  return (
    <div>
      {players}인용 게임 리스트
      {dummy.map((el) => {
        return <div>{el.title}</div>;
      })}
    </div>
  );
}
