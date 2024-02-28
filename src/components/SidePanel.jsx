import ListCam from "./ListCam";
import StatisticPanel from "./StatisticPanel";
import ModelConfigPanel from "./ModelConfigPanel";
const SidePanel = () => {
  return (
    <div className=" h-screen  mx-5">
      <StatisticPanel/>
      <ModelConfigPanel/>
      <ListCam/>
    </div>
  );
};

export default SidePanel;
