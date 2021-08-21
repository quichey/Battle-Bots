import React from "react";
import PixelGrid from "react-pixel-grid";

import { Piece } from "./pieces/Piece";
import { Pawn } from "./pieces/Pawn";

export const BattleGrid = () => {
  const gameBoardCss = {
    display: "grid",
    gridTemplateColumns: "120px 120px 120px 120px 120px 120px 120px 120px",
    //gridTemplateColumns: "120px 120px 120px",
    //gridTemplateTows: "120px 120px 120px 20px",
    justifyContent: "center",
    height: "800px",
  };

  const boxCss = {
    backgroundColor: "#d9d9d9",
    border: "2px solid black",
  };

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var dragId = ev.dataTransfer.getData("dragId");
    var pieceType = ev.dataTransfer.getData("pieceType");
    if (pieceType === "pawn") {
      var currPieceRow = Number(dragId.split("-")[0]);
      var dropRow = Number(ev.target.id.split("-")[0]);
      if (dropRow !== currPieceRow + 1) return;
    }
    ev.target.appendChild(document.getElementById(dragId));
  }

  const col = new Array(8);
  col.fill(0);
  const row = new Array(8);
  row.fill(0);

  const divs = [];

  row.forEach((el, idx) => {
    col.forEach((el2, idx2) => {
      const piece =
        idx === 1 || idx === 6 ? <Pawn pieceId={`${idx}-${idx2}`} /> : "";
      divs.push(
        <div
          key={`${idx}-${idx2}`}
          id={`${idx}-${idx2}-square`}
          style={boxCss}
          onDrop={drop}
          onDragOver={allowDrop}
        >
          {piece}
        </div>
      );
    });
  });

  return false ? (
    <PixelGrid
      data={Array(400).fill(0).map(Math.random)}
      options={{
        size: 10,
        padding: 2,
        background: [0, 0.5, 0.7, 1],
      }}
    />
  ) : (
    <React.Fragment>
      <div key={0} style={gameBoardCss}>
        {divs}
      </div>
      {true ? (
        <Piece pieceId="test" img="TEST" />
      ) : (
        <div key={1} id="piece" draggable="true" onDragStart={drag}>
          TEXT
        </div>
      )}
    </React.Fragment>
  );
};
