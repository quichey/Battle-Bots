import { Piece } from "./Piece";

type QueenProp = {
  pieceId: string;
};

export const Queen = ({ pieceId }: QueenProp) => {
  var boardIndices: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Piece
      pieceId={pieceId}
      pieceType="Queen"
      getValidSquares={(row, col) => {
        var validSquares: string[] = [];
        boardIndices.forEach((idx) => {
          var newRows = [row + idx, row - idx];
          var newCols = [col + idx, col - idx];

          newRows.forEach((newRow) => {
            newCols.forEach((newCol) => {
              validSquares.push(`${newRow}-${newCol}`);
            });
          });
        });
        return validSquares;
      }}
    />
  );
};
