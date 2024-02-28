import VehicleOption from "./VehicleOption";
import ModelConfidenceRange from "./ModelConfidenceRange";
import IOURange from "./IOURange";
const ModelConfigPanel = () => {
  return (
    <>
      <div className="card bg-white text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Model Configuration Panel</h2>
          <VehicleOption />
          <ModelConfidenceRange />
          <IOURange />
        </div>
      </div>
    </>
  );
};

export default ModelConfigPanel;
