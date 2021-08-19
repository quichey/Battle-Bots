import React from "react"

export const BattleGrid = () => {
    const gameBoardCss = {
        display: "grid",
        gridTemplateColumns: "120px 120px 120px", 
        gridTemplateTows: "120px 120px 120px 20px",
        justifyContent: "center",
        height: "400px"
    }

    const boxCss = {
        backgroundColor: "#d9d9d9",
        border: "2px solid black"
    }

    return (
        <div style={gameBoardCss}>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
            <div style={boxCss}></div>
        </div>
    )
}