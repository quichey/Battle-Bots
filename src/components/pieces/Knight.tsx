import { Piece } from "./Piece";
import KnightSVG from "../../util/images/Knight_Black.svg";

type KnightProp = {
  pieceId: string;
};

export const Knight = ({ pieceId }: KnightProp) => {
  const validChanges: number[] = [+2, -2, +1, -1];

  return (
    <Piece
      pieceId={pieceId}
      img={KnightSVG}
      getValidSquares={(row, col) => {
        var validSquares: string[] = [];
        validChanges.forEach((rowChange) => {
          validChanges.forEach((colChange) => {
            if (Math.abs(rowChange) !== Math.abs(colChange)) {
              validSquares.push(`${row + rowChange}-${col + colChange}`);
            }
          });
        });
        return validSquares;
      }}
    />
  );
};
