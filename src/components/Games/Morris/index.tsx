import Dot from "./Dot";
import * as S from "./emotion";

export default function Morris() {
  return (
    <S.Wrap>
      <S.Square size="B">
        <S.Row>
          <Dot />
          <Dot />
          <Dot />
        </S.Row>
        <S.Row>
          <Dot />
          <Dot />
        </S.Row>
        <S.Row>
          <Dot />
          <Dot />
          <Dot />
        </S.Row>
      </S.Square>
      <S.Square size="M">
        <S.Row>
          <Dot />
          <Dot />
          <Dot />
        </S.Row>
        <S.Row>
          <Dot />
          <Dot />
        </S.Row>
        <S.Row>
          <Dot />
          <Dot />
          <Dot />
        </S.Row>
      </S.Square>
      <S.Square size="S">
        <S.Row>
          <Dot />
          <Dot />
          <Dot />
        </S.Row>
        <S.Row>
          <Dot />
          <Dot />
        </S.Row>
        <S.Row>
          <Dot />
          <Dot />
          <Dot />
        </S.Row>
      </S.Square>
    </S.Wrap>
  );
}
