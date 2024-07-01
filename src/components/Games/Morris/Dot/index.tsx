import { useState } from "react";
import * as S from "./emotion";

interface DotProps {
  // condition: "N" | "B" | "W";
  // row: 1|2|3;
  // index: -1 | 0 | 1;
}

export default function Dot(props: DotProps) {
  const [condition, setCondition] = useState("N");
  return <S.Wrap>{condition}</S.Wrap>;
}
