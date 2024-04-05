import axios from "axios";
import { useState, useEffect } from "react";
const VehicleOption = () => {
  const [isCar, setIsCar] = useState(false);
  const [isTruck, setIsTruck] = useState(false);
  const [isBike, setIsBike] = useState(false);
  const [isBus, setIsBus] = useState(false);
  const [listVel, setListVel] = useState([]);
  const apiUrl = import.meta.env.PUBLIC_API_URL;
  useEffect(() => {
    axios.post(apiUrl+"/get-vel").then((response) => {
      const listVelResponse = response.data.listVel;
      setListVel(listVelResponse);

      if (listVelResponse.includes(2)) {
        setIsCar(true);
      }
      if (listVelResponse.includes(7)) {
        setIsTruck(true);
      }
      if (listVelResponse.includes(3)) {
        setIsBike(true);
      }
      if (listVelResponse.includes(5)) {
        setIsBus(true);
      }
    });
  }, []);

  const addListVel = (vel) => {
    return () => {
      if (!listVel.includes(vel)) {
        listVel.push(vel);
        switch (vel) {
          case 2:
            setIsCar(true);
            break;
          case 7:
            setIsTruck(true);
            break;
          case 3:
            setIsBike(true);
            break;
          case 5:
            setIsBus(true);
            break;
          default:
            break;
        }
        
      }
      else{
        listVel.splice(listVel.indexOf(vel),1);
        switch (vel) {
          case 2:
            setIsCar(false);
            break;
          case 7:
            setIsTruck(false);
            break;
          case 3:
            setIsBike(false);
            break;
          case 5:
            setIsBus(false);
            break;
          default:
            break;
        }
        
      }
      axios.post(apiUrl + "/set-vel", { listVel: listVel })
    };
  };
  return (
    <div>
      <>
        <p className="mb-2">List Vehicle Detection</p>
        <div className="grid grid-cols-8 gap-2">
          <div className="col-span-2">
            <button
              onClick={addListVel(2)}
              className={`btn btn-block ${
                isCar ? "btn-success" : "btn-neutral"
              }`}
            >
              Car
            </button>
          </div>
          <div className="col-span-2">
            <button
              onClick={addListVel(7)}
              className={`btn btn-block ${
                isTruck ? "btn-success" : "btn-neutral"
              }`}
            >
              Truck
            </button>
          </div>
          <div className="col-span-2">
            <button
              onClick={addListVel(3)}
              className={`btn btn-block ${
                isBike ? "btn-success" : "btn-neutral"
              }`}
            >
              Bike
            </button>
          </div>
          <div className="col-span-2">
            <button
              onClick={addListVel(5)}
              className={`btn btn-block ${
                isBus ? "btn-success" : "btn-neutral"
              }`}
            >
              Bus
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
export default VehicleOption;
