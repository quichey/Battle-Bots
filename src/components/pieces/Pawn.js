import { Piece } from "./Piece.";
import PawnSVG from "../../util/images/Pawn_White.svg";

export const Pawn = ({ pieceId }) => {
  //const img = false ? SVG : <img src="http://www.w3.org/2000/svg" alt="PAWN" />;

  return (
    <Piece
      pieceId={pieceId}
      img={PawnSVG}
      getValidSquares={(row, col) => {
        var validCols = [0, 1, 2, 3, 4, 5, 6, 7];
        return validCols.map((validCol) => {
          return `${row + 1}-${validCol}`;
        });
      }}
    />
  );
};
