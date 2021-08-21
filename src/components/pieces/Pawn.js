import { Piece } from "./Piece";
import PawnWhite from "../../util/images/Pawn_White.svg";
import PawnBlack from "../../util/images/Pawn_Black.svg";

export const Pawn = ({ pieceId }) => {
  //const img = false ? SVG : <img src="http://www.w3.org/2000/svg" alt="PAWN" />;
  const color = pieceId && pieceId.split("-")[2];
  return (
    <Piece
      pieceId={pieceId}
      img={color === "white" ? PawnWhite : PawnBlack}
      getValidSquares={(row, col) => {
        var validCols = [0, 1, 2, 3, 4, 5, 6, 7];
        var direction = color === "white" ? -1 : 1;
        return validCols.map((validCol) => {
          return `${row + direction}-${validCol}`;
        });
      }}
    />
  );
};
