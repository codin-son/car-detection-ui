import StatisticPanel from "./StatisticPanel";
import ModelConfigPanel from "./ModelConfigPanel";
import SwapCamBtn from "./SwapCamBtn";

const SidePanel = ({ issetLine, issetPoly, setissetLine, setissetPoly }) => {
  const startSetLine = () => {
    setissetLine(true);
  };

  const cancelSetLine = () => {
    setissetLine(false);
  };

  const startSetPoly = () => {
    setissetPoly(true);
  };
  const cancelSetPoly = () => {
    setissetPoly(false);
  };
  return (
    <div className=" h-screen  mx-5">
      <StatisticPanel />
      <ModelConfigPanel />
      <button
        className={`btn btn-block ${issetLine ? "btn-neutral" : "btn-primary mt-5"}`}
        id="setLine"
        onClick={issetLine ? cancelSetLine : startSetLine}
      >
        {`${issetLine ? "Cancel" : "Set Line"}`}
      </button>
      {/* <button
          className={`btn addroi ${issetPoly ? "btn-neutral" : "btn-primary"}`}
          id="addROI"
          onClick={issetPoly ? cancelSetPoly :startSetPoly}
        >
          {`${issetPoly ? "Cancel" : "Add ROI"}`}
        </button> */}
      <SwapCamBtn  />
      {/* <div className="text-9xl text-error">jangan tutup</div> */}
      {/* <p className="text-5xl text-red-600">Please DOnt Close. </p>
      <p className="text-5xl text-red-600">Please DOnt Close. </p>
      <p className="text-5xl text-red-600">Please DOnt Close. </p>
      <p className="text-5xl text-red-600">Please DOnt Close. </p>
      <p className="text-5xl text-red-600">Please DOnt Close. </p> */}
    </div>
  );
};

export default SidePanel;
