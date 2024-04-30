import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from "axios";
import { useState, useEffect } from "react";
const IOURange = () => {
  const [value, setValue] = useState(0.2); // initial value is 0.2
  const apiUrl = import.meta.env.PUBLIC_API_URL;

  useEffect(() => {
    axios.get(apiUrl + `/get-iou`).then((response) => {
      setValue(response.data.iou);
    });
  }, []);

const handleChange = (event) => {
  const newValue = parseFloat(event.target.value);
  axios
    .get(apiUrl + `/set-iou?iou=${newValue}`)
    .then((response) => {
      console.log("IOU value set to", newValue);
      console.log(response.data);
      // Update the value state only after the axios.get request has completed
      setValue(response.data.iou);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

  return (
    <div>
      <div className="flex justify-start items-center">
        <div className="me-2 mb-2">Intersection Over Union Percentage</div>
        <div
          className="tooltip"
          data-tip="This configuration for remove overlap detection"
        >
          <IoMdInformationCircleOutline />
        </div>
      </div>
      <select
        className="select select-bordered w-full bg-slate-200"
        value={value}
        onChange={handleChange}
      >
        <option disabled selected>
          Choose IOU Value
        </option>
        <option>0.1</option>
        <option>0.2</option>
        <option>0.3</option>
        <option>0.4</option>
        <option>0.5</option>
        <option>0.6</option>
        <option>0.7</option>
        <option>0.8</option>
        <option>0.9</option>
        <option>1.0</option>
      </select>
    </div>
  );
};

export default IOURange;
