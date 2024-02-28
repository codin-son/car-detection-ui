const StatisticPanel = () => {
  return (
    <div className="mb-5 ">
      <div className="stats bg-primary text-primary-content w-full">
        <div className="stat">
          <div className="stat-title text-base-100">Total Cars</div>
          <div className="stat-value">4,395</div>
          <div className="stat-desc text-base-100">since 1 February 2024</div>
        </div>
        <div className="stat">
          <div className="stat-title text-base-100">Today</div>
          <div className="stat-value">238</div>
          <div className="stat-desc text-base-100">cars counted</div>
        </div>
        <div className="stat">
          <div className="stat-title text-base-100">Congestion Status</div>
          <div className="stat-value text-error">High</div>
          <div className="stat-desc text-base-100">level</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticPanel;
