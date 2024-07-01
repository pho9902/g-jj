import Dot from "./Dot";

export default function Morris() {
  return (
    <div>
      <div id="BigSquare">
        <div id="Row">
          <Dot />
          <Dot />
          <Dot />
        </div>
        <div id="Row">
          <Dot />
          <Dot />
        </div>
        <div id="Row">
          <Dot />
          <Dot />
          <Dot />
        </div>
      </div>
      <div id="MiddleSquare">
        <div id="Row">
          <Dot />
          <Dot />
          <Dot />
        </div>
        <div id="Row">
          <Dot />
          <Dot />
        </div>
        <div id="Row">
          <Dot />
          <Dot />
          <Dot />
        </div>
      </div>
      <div id="SmallSquare">
        <div id="Row"></div>
        <div id="Row"></div>
        <div id="Row"></div>
      </div>
    </div>
  );
}
