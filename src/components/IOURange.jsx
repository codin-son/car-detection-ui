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
    setValue(newValue);
    axios
      .get(apiUrl + `/set-iou?iou=${newValue}`)
      .then((response) => {
        console.log(response.data);
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
      <input
        type="range"
        min={0.0}
        max={1.0}
        value={value}
        className="range"
        onChange={handleChange}
        step={0.1}

      />
    </div>
  );
};

export default IOURange;
