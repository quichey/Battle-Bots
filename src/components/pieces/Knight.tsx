import { Piece } from "./Piece.";
import SVG from "../../logo.svg";

type KnightProp = {
  pieceId: string;
};

export const Knight = ({ pieceId }: KnightProp) => {
  const img = false ? SVG : <img src="http://www.w3.org/2000/svg" alt="PAWN" />;

  const validChanges: number[] = [+2, -2, +1, -1];

  return (
    <Piece
      pieceId={pieceId}
      img={"http://www.w3.org/2000/svg"}
      getValidSquares={(row, col) => {
        var validSquares: string[] = [];
        validChanges.forEach((rowChange) => {
          validChanges.forEach((colChange) => {
            if (Math.abs(row) !== Math.abs(col)) {
              validSquares.push(`${row + rowChange}-${col + colChange}`);
            }
          });
        });
        return validSquares;
      }}
    />
  );
};
