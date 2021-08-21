import { Piece } from "./Piece";
import SVG from "../../logo.svg";

export const Pawn = ({ pieceId }) => {
  const img = false ? SVG : <img src="http://www.w3.org/2000/svg" alt="PAWN" />;
  return (
    <Piece
      pieceId={pieceId}
      pieceType="pawn"
      img={"http://www.w3.org/2000/svg"}
    />
  );
};
