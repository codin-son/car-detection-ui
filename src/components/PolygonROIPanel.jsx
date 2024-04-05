import { useEffect, useRef, useState } from "react";
import axios from "axios";

const PolygonROIPanel = ({ issetPoly, setissetPoly, issetLine }) => {
  const polygoncanvasref = useRef(null);
  const [points, setPoints] = useState([]);
  const [mousePos, setMousePos] = useState(null);
  const [isDrawing, setIsDrawing] = useState(true);
  const apiUrl = import.meta.env.PUBLIC_API_URL;

  const handleClick = (e) => {
    if (!isDrawing && !issetPoly){
      console.log("keluar pol", isDrawing, issetPoly);
      return;
    };
    console.log("masuk pol", isDrawing, issetPoly);
    if(issetPoly){
      const rect = polygoncanvasref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPoints((oldPoints) => [...oldPoints, { x, y }]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const rect = polygoncanvasref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsDrawing(false);
      setissetPoly(false);
    }
  };

  useEffect(() => {
  if (!isDrawing && points.length > 2) {
    console.log(points);
    axios.post(apiUrl + "/set-poly", { points }).then((response) => {
      console.log(response);
      const context = polygoncanvasref.current.getContext("2d");
      context.clearRect(0, 0, polygoncanvasref.current.width, polygoncanvasref.current.height);
      setPoints([]);
      setIsDrawing(true);
    })
  }
}, [isDrawing]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if(issetPoly){
      const context = polygoncanvasref.current.getContext("2d");
      context.clearRect(0, 0, polygoncanvasref.current.width, polygoncanvasref.current.height);
  
      if (points.length > 0) {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        points.slice(1).forEach((point) => {
          context.lineTo(point.x, point.y);
        });
        context.lineWidth = 5;
        context.strokeStyle = "blue";
        context.stroke();
  
        if (mousePos && isDrawing) {
          context.beginPath();
          context.moveTo(points[points.length - 1].x, points[points.length - 1].y);
          context.lineTo(mousePos.x, mousePos.y);
          context.stroke();
        }
  
        if (!isDrawing && points.length > 1) {
          context.beginPath();
          context.moveTo(points[points.length - 1].x, points[points.length - 1].y);
          context.lineTo(points[0].x, points[0].y);
          context.stroke();
        }
      }
    }
  }, [points, mousePos, isDrawing]);

  return (
    <>
    {issetPoly && (
              <canvas
              className="rounded-lg mb-5"
              id="polygonCanvas"
              ref={polygoncanvasref}
              width={1280}
              height={720}
              style={{ position: "absolute", cursor: "crosshair"}}
              onClick={handleClick}
              onMouseMove={handleMouseMove}
            ></canvas>
    )}
    </>
  );
};

export default PolygonROIPanel;