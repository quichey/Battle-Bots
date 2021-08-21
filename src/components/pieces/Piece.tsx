import React from "react";

interface PieceProps {
  img: string;
  pieceId: string;
  getValidSquares: (row: number, col: number) => string[];
}

export const Piece = ({ img, pieceId, getValidSquares }: PieceProps) => {
  const drag = (event: any) => {
    event.dataTransfer.setData("dragId", event.target.id);
    const [row, col] = event.target.id
      .split("-")
      .map((val: string) => Number(val));
    event.dataTransfer.setData(
      "validSquares",
      JSON.stringify(getValidSquares(row, col))
    );
  };

  return (
    //<div style={{ width: 100, height: 100 }}>
    <img
      width="100px"
      height="100px"
      id={pieceId}
      src={img}
      alt="test"
      onDragStart={drag}
      draggable
    ></img>
    //</div>
  );
};
