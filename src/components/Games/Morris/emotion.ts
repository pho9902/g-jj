import styled from "@emotion/styled";

interface SquareProps {
  size: "B" | "M" | "S";
}

export const Wrap = styled.div`
  padding: 150px;
  width: 500px;
  height: 500px;
`;

export const Square = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: ${(props: SquareProps) =>
    props.size === "B" ? "1px solid blue" : "1px solid green"};
  width: ${(props: SquareProps) => {
    switch (props.size) {
      case "B":
        return "100%";
      case "M":
        return "75%";
      case "S":
        return "50%";
    }
  }};
  height: ${(props: SquareProps) => {
    switch (props.size) {
      case "B":
        return "100%";
      case "M":
        return "75%";
      case "S":
        return "50%";
    }
  }};
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border: 20px solid red;
`;
