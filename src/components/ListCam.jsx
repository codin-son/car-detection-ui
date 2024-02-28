import AddCamBtn from "./AddCamBtn";
const ListCam = () => {
  return (
    <div className="w-auto mt-5">
      <div className="flex flex-row justify-between items-end">
        <h1 className="font-bold">List camera</h1>
        <AddCamBtn />
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Camera ID</th>
              <th>Camera Location</th>
              <th>Camera Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>SP-HIKVISION-01</td>
              <td>South Entrace</td>
              <td>
                <div className="badge badge-success gap-2">Online</div>
              </td>
              <td>
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn btn-sm btn-primary">
                    Option
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <button className="btn btn-sm btn-primary">View</button>
                    </li>
                    <li>
                      <button className="btn btn-neutral btn-sm">Delete</button>
                    </li>
                  </ul>
                </details>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>SP-HIKVISION-02</td>
              <td>North Entrace</td>
              <td>
                <div className="badge badge-success gap-2">Online</div>
              </td>
              <td>
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn btn-sm btn-primary">
                    Option
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <button className="btn btn-sm btn-primary">View</button>
                    </li>
                    <li>
                      <button className="btn btn-neutral btn-sm">Delete</button>
                    </li>
                  </ul>
                </details>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>SP-HIKVISION-03</td>
              <td>East Entrace</td>
              <td>
                <div className="badge badge-success gap-2">Online</div>
              </td>
              <td>
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn btn-sm btn-primary">
                    Option
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <button className="btn btn-sm btn-primary">View</button>
                    </li>
                    <li>
                      <button className="btn btn-neutral btn-sm">Delete</button>
                    </li>
                  </ul>
                </details>
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>SP-HIKVISION-04</td>
              <td>West Entrace</td>
              <td>
                <div className="badge badge-error gap-2">Offline</div>
              </td>
              <td>
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn btn-sm btn-primary">
                    Option
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <button className="btn btn-sm btn-disabled">View</button>
                    </li>
                    <li>
                      <button className="btn btn-neutral btn-sm">Delete</button>
                    </li>
                  </ul>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCam;
