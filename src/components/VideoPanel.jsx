import { useRef, useEffect, useState } from "react";
import SwapCamBtn from "./SwapCamBtn";
import GridVidPanel from "./GridVidPanel";
import LineROIPanel from "./LineROIPanel";
import PolygonROIPanel from "./PolygonROIPanel";
const VideoPanel = () => {
  const videoCanvasRef = useRef(null);
  const apiUrl = import.meta.env.PUBLIC_API_URL;
  const urlBig = apiUrl + "/detection";

  const [issetLine, setissetLine] = useState(false);
  const [issetPoly, setissetPoly] = useState(false);
  const [getcw, setgetcw] = useState(0);
  const [getch, setgetch] = useState(0);

  let imageBig;
  if (typeof window !== "undefined") {
    imageBig = new Image();
    imageBig.crossOrigin = "anonymous";
  }

  const startSetLine = () => {
    setissetLine(true);
  };

  const startSetPoly = () => {
    setissetPoly(true);
  };

  useEffect(() => {
    if (videoCanvasRef.current.getContext("2d") === null) {
      return;
    }
    const context = videoCanvasRef.current.getContext("2d");
    let timeoutId;
    let imageLoaded = false;

    imageBig.onload = () => {
      imageLoaded = true;
      const cw = videoCanvasRef.current.width;
      const ch = videoCanvasRef.current.height;
      setgetch(ch);
      setgetcw(cw);
      context.clearRect(0, 0, cw, ch);
      if (imageBig.complete) {
        context.drawImage(imageBig, 0, 0, cw, ch);
      }
    };
    imageBig.onerror = () => {
      console.error("Failed to load image");
    };

    imageBig.src = urlBig;

    const canvasInterval = setInterval(() => {
      if (imageLoaded) {
        try {
          const cw = videoCanvasRef.current.width;
          const ch = videoCanvasRef.current.height;
          context.clearRect(0, 0, cw, ch);
          context.drawImage(imageBig, 0, 0, cw, ch);
        } catch (error) {}
      }
    }, 10);
    return () => {
      clearInterval(canvasInterval);
      clearTimeout(timeoutId);
      imageBig.src = "";
    };
  }, []);
  return (
    <div>
      <div>
        <GridVidPanel
          cw={getcw}
          ch={getch}
          issetLine={issetLine}
          setissetLine={setissetLine}
          issetPoly={issetPoly}
          setissetPoly={setissetPoly}
        />
        <PolygonROIPanel
          cw={1280}
          ch={720}
          issetPoly={issetPoly}
          setissetPoly={setissetPoly} // Pass setissetLine as a prop here
        />
        <LineROIPanel
          cw={1280}
          ch={720}
          issetLine={issetLine}
          setissetLine={setissetLine} // Pass setissetLine as a prop here
        />
        <canvas
          className="rounded-lg mb-5"
          ref={videoCanvasRef}
          width={1280}
          height={720}
        ></canvas>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="btn btn-primary setLine"
          id="setLine"
          onClick={startSetLine}
          disabled={issetLine} // Add this line
        >
          Set Line
        </button>
        <button
          className="btn btn-primary addroi"
          id="addROI"
          onClick={startSetPoly}
          disabled={issetLine} // Add this line
        >
          Set Polygon
        </button>
        <SwapCamBtn />
      </div>
    </div>
  );
};

export default VideoPanel;
