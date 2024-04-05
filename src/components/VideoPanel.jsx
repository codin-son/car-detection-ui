import { useRef, useEffect, useState } from "react";
import GridVidPanel from "./GridVidPanel";
import LineROIPanel from "./LineROIPanel";
import PolygonROIPanel from "./PolygonROIPanel";

const VideoPanel = ({ issetLine, setissetLine, issetPoly, setissetPoly }) => {
  const videoCanvasRef = useRef(null);
  const apiUrl = import.meta.env.PUBLIC_API_URL;
  const urlBig = "ws://localhost:9099/video_feed";
  const [getcw, setgetcw] = useState(0);
  const [getch, setgetch] = useState(0);

  useEffect(() => {
    if (videoCanvasRef.current.getContext("2d") === null) {
      return;
    }

    const context = videoCanvasRef.current.getContext("2d");

    const socket = new WebSocket(urlBig);

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      const imageData = event.data;
      const image = new Image();
      image.onload = () => {
        const cw = videoCanvasRef.current.width;
        const ch = videoCanvasRef.current.height;
        setgetch(ch);
        setgetcw(cw);
        context.clearRect(0, 0, cw, ch);
        context.drawImage(image, 0, 0, cw, ch);
      };
      image.src = 'data:image/jpeg;base64,' + imageData;
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
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
          setissetPoly={setissetPoly}
          issetLine={issetLine}
        />
        <LineROIPanel
          cw={1280}
          ch={720}
          issetLine={issetLine}
          setissetLine={setissetLine}
          issetPoly={issetPoly}
        />
        <canvas
          className="rounded-lg mb-5"
          ref={videoCanvasRef}
          width={1280}
          height={720}
        ></canvas>
      </div>
    </div>
  );
};

export default VideoPanel;