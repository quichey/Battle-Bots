import { Piece } from "./Piece";

type KnightProp = {
  pieceId: string;
};

export const Knight = ({ pieceId }: KnightProp) => {
  const validChanges: number[] = [+2, -2, +1, -1];

  return (
    <Piece
      pieceId={pieceId}
      pieceType="Knight"
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
