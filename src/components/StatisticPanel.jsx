import axios from "axios";
import { useEffect, useState } from "react";
const StatisticPanel = () => {
  const [totalcarall, settotalcarall] = useState(0);
  const [totalcarcurrent, settotalcarcurrent] = useState(0);
  const [startDate, setStartDate] = useState("");
  const apiUrl = import.meta.env.PUBLIC_API_URL_WS;

  useEffect(() => {
    const socketTotal = new WebSocket(apiUrl+'/ws/get-total');
    const socketTotalCurrentDate = new WebSocket(apiUrl+'/ws/get-total-by-current-date');

    socketTotal.onopen = () => {
      console.log('Connected to WebSocket for total');
    };

    socketTotal.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.total) {
        settotalcarall(data.total);
      } else {
        console.error(data.error);
      }
    };

    socketTotal.onerror = (error) => {
      console.error('WebSocket error for total:', error);
    };

    socketTotal.onclose = () => {
      console.log('WebSocket connection for total closed');
    };

    socketTotalCurrentDate.onopen = () => {
      console.log('Connected to WebSocket for total by current date');
    };

    socketTotalCurrentDate.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.total_current) {
        settotalcarcurrent(data.total_current);
      } else {
        console.error(data.error);
      }
    };

    socketTotalCurrentDate.onerror = (error) => {
      console.error('WebSocket error for total by current date:', error);
    };

    socketTotalCurrentDate.onclose = () => {
      console.log('WebSocket connection for total by current date closed');
    };

    return () => {
      socketTotal.close();
      socketTotalCurrentDate.close();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + "/get-start-run-dt");
        const date = new Date(response.data.start_run_dt);
        const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        console.log(formattedDate);
        setStartDate(formattedDate);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-5 ">
      <div className="stats bg-white text-primary-content w-full">
        <div className="stat">
          <div className="stat-title text-base-100">Total Vehicle</div>
          <div className="stat-value">{totalcarall}</div>
          <div className="stat-desc text-base-100">since 1 March 2024</div>
        </div>
        <div className="stat">
          <div className="stat-title text-base-100">Today</div>
          <div className="stat-value">{totalcarcurrent}</div>
          <div className="stat-desc text-base-100">Vehicle counted</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticPanel;
