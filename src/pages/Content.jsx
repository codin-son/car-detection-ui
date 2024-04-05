import VideoPanel from "../components/VideoPanel";
import SidePanel from "../components/SidePanel";
import { useState } from "react";
const Content = () => {
    const [issetLine, setissetLine] = useState(false);
    const [issetPoly, setissetPoly] = useState(false);

  return (
    <div className="mx-16 flex flex-row">
      <VideoPanel issetLine={issetLine} setissetLine={setissetLine} issetPoly={issetPoly} setissetPoly={setissetPoly}/>
      <SidePanel issetLine={issetLine} setissetLine={setissetLine} issetPoly={issetPoly}setissetPoly={setissetPoly}/>
    </div>
  );
};

export default Content;
