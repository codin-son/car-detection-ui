import { useEffect, useRef, useState } from "react";
import axios from "axios";
const LineROIPanel = ({ cw, ch, issetLine, setissetLine, issetPoly }) => {
  const linecanvasref = useRef(null);
  const [line, setLine] = useState({ start: null, end: null });
  const [hasDrawn, setHasDrawn] = useState(false);
  const [linePoints, setLinePoints] = useState({ start: null, end: null });
  const [currentMousePosition, setCurrentMousePosition] = useState(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const apiUrl = import.meta.env.PUBLIC_API_URL;

  useEffect(() => {
    if (isDrawing) {
      axios
        .get(
          apiUrl +
            `/set-roi?start_x=${startX}&start_y=${startY}&end_x=${endX}&end_y=${endY}`
        )
        .then((response) => {
          console.log(response);
          const context = linecanvasref.current.getContext("2d");
          context.clearRect(0, 0, cw, ch);
        });
    }
  }, [isDrawing]);

  useEffect(() => {
    if (!issetLine) {
      setHasDrawn(false);
      setIsDrawing(false);
    }
  }, [issetLine]);

  const drawLine = (start, end, context) => {
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.lineTo(end.x, end.y);
    context.stroke();
  };

  const handleMouseMove = (e) => {
    if (!issetLine || hasDrawn) {
      console.log("keluar", issetLine, hasDrawn);
      return;
    }
    const rect = linecanvasref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCurrentMousePosition({ x, y });
    const context = linecanvasref.current.getContext("2d");
    context.clearRect(0, 0, cw, ch);
    if (line.start) {
      drawLine(line.start, { x, y }, context);
    }
  };

  const handleClick = (e) => {
    if (!issetLine || hasDrawn) {
      return;
    }
    const rect = linecanvasref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (!line.start) {
      setLine({ ...line, start: { x, y } });
    } else {
      setLine({ ...line, end: { x, y } });
      drawLine(line.start, { x, y }, linecanvasref.current.getContext("2d"));
      setLinePoints({ start: line.start, end: { x, y } });
      console.log(linePoints);
      setStartX(line.start.x);
      setStartY(line.start.y);
      setEndX(x);
      setEndY(y);
      setLine({ start: null, end: null });
      setHasDrawn(true);
      setIsDrawing(true);
      setissetLine(false);
    }
  };

  useEffect(() => {
    if (issetLine) {
      const canvas = linecanvasref.current;
      canvas.addEventListener("mousemove", handleMouseMove);
      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [issetLine, hasDrawn, line]);
  return (
    <>
      {issetLine && (
        <canvas
          className="rounded-lg mb-5"
          id="lineCanvas"
          ref={linecanvasref}
          width={1280}
          height={720}
          style={{ position: "absolute", cursor: "crosshair" }}
          onClick={handleClick}
          disabled={issetPoly}
        ></canvas>
      )}
    </>
  );
};

export default LineROIPanel;
