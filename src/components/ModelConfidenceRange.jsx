import React, { useEffect, useState } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from 'axios';
const ModelConfidenceRange = () => {
  const [value, setValue] = useState(0.2); // initial value is 0.2
  const apiUrl = import.meta.env.PUBLIC_API_URL;

  useEffect(() => {
    axios.get(apiUrl + `/get-conf`).then((response) => {
      setValue(response.data.conf);
    });
  }, []);

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    axios
      .get(apiUrl + `/set-conf?conf=${newValue}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };



  return (
    <>
      <div className="flex justify-start items-center">
        <div className="me-2 ">Model Confidence Percentage</div>
        <div
          className="tooltip"
          data-tip="This configuration for adjust the confidence level of detection"
        >
          <IoMdInformationCircleOutline />
        </div>
      </div>
      <input
        type="range"
        min={0.0}
        max={1.0}
        value={value}
        className="range"
        onChange={handleChange}
        step={0.1}
      />
    </>
  );
};

export default ModelConfidenceRange;