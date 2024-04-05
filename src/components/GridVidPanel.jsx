import { useEffect, useRef, useState } from "react";
const GridVidPanel = ({cw,ch, issetLine, issetPoly}) => {
  const gridCanvasRef = useRef(null);
  useEffect(() =>{
    const gridContext = gridCanvasRef.current.getContext("2d"); // Get context of new canvas
    if(issetLine | issetPoly){
      if(issetLine | issetPoly){
        gridCanvasRef.current.style.cursor = "crosshair"
      }
      gridContext.clearRect(0, 0, cw, ch);
      gridContext.beginPath();
      gridContext.lineWidth = 1;
      gridContext.strokeStyle = "red";
      for (let i = 0; i < cw; i += 20) {
        gridContext.moveTo(i, 0);
        gridContext.lineTo(i, ch);
      }
      for (let i = 0; i < ch; i += 20) {
        gridContext.moveTo(0, i);
        gridContext.lineTo(cw, i);
      }
      gridContext.stroke();
    }
    else if(!issetLine | !issetPoly){
      // clear the canvas
      gridContext.clearRect(0, 0, cw, ch);
    }
  
  },[issetLine, issetPoly])

  return (
    <canvas
      className="rounded-lg mb-5"
      id="gridCanvas"
      ref={gridCanvasRef}
      width={1280}
      height={720}
      style={{ position: "absolute"}}
    ></canvas>
  );
};

export default GridVidPanel;
