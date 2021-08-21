import { Piece } from "./Piece";

type RookProp = {
  pieceId: string;
};

export const Rook = ({ pieceId }: RookProp) => {
  var boardIndices: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Piece
      pieceId={pieceId}
      pieceType="Rook"
      getValidSquares={(row, col) => {
        var validSquares: string[] = [];
        boardIndices.forEach((idx) => {
          validSquares.push(`${row}-${idx}`);
          validSquares.push(`${idx}-${col}`);
        });
        return validSquares;
      }}
    />
  );
};
