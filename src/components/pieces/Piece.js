import React from "react";

export const Piece = ({ img, pieceId, pieceType }) => {
  const drag = (event) => {
    event.dataTransfer.setData("dragId", event.target.id);
    event.dataTransfer.setData("pieceType", pieceType);
  };

  return (
    <div width="100px" height="100px">
      <img
        width="100px"
        height="100px"
        id={pieceId}
        src={img}
        alt="test"
        onDragStart={drag}
        draggable
      ></img>
    </div>
  );
};
