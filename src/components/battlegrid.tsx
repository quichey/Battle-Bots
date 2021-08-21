import React from "react";
import { Pawn } from "./pieces/Pawn";
import { Knight } from "./pieces/Knight";

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

  function allowDrop(ev: any) {
    ev.preventDefault();
  }

  function drop(ev: any) {
    ev.preventDefault();
    var dragId = ev.dataTransfer.getData("dragId");
    var validSquares = JSON.parse(ev.dataTransfer.getData("validSquares"));
    //var pieceType = ev.dataTransfer.getData("pieceType");

    var dropCell = ev.target.id.slice(0, 3);
    if (validSquares.includes(dropCell)) {
      ev.target.appendChild(document.getElementById(dragId));
    }
  }

  const col = new Array(8);
  col.fill(0);
  const row = new Array(8);
  row.fill(0);

  const divs: React.ReactNode[] = [];

  row.forEach((el, idx) => {
    col.forEach((el2, idx2) => {
      let piece: JSX.Element | "" = "";
      var pieceId = `${idx}-${idx2}`;

      if (idx === 1 || idx === 6) {
        piece = <Pawn pieceId={pieceId} />;
      } else if (idx === 0 || idx === 7) {
        //set pieces in first and last rows
        if (idx2 === 2 || idx2 === 5) {
          piece = <Knight pieceId={pieceId} />;
        }
      }
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
    /*
    <PixelGrid
      data={Array(400).fill(0).map(Math.random)}
      options={{
        size: 10,
        padding: 2,
        background: [0, 0.5, 0.7, 1],
      }}
    />
    */
    ""
  ) : (
    //<React.Fragment>
    <div key={0} style={gameBoardCss}>
      {divs}
    </div>
    /*
      {true ? (
        //<Piece pieceId="test" img="TEST" />
        ""
      ) : (
        <div key={1} id="piece" draggable="true" onDragStart={drag}>
          TEXT
        </div>
      )}
    </React.Fragment>
    */
  );
};
