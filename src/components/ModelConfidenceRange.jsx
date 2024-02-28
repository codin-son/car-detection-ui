import React, { useEffect, useState } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from 'axios';
const ModelConfidenceRange = () => {
  const [value, setValue] = useState(0.2); // initial value is 0.2
  const apiUrl = import.meta.env.PUBLIC_API_URL;
  useEffect(()=>{
    axios.get(apiUrl+`/set-conf?conf=${value}`,)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });

  },[value])

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <>
      <div className="flex justify-start items-center">
        <div className="me-2">Model Confidence Percentage</div>
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
        max="1.0"
        value={value}
        onChange={handleChange}
        className="range"
        step="0.1"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </>
  );
};

export default ModelConfidenceRange;