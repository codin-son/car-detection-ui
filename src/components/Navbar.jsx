const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ms-16">
        <p className="text-xl font-bold">CIQ</p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-xl font-bold" href="http://localhost:3000/public/dashboard/bb804282-a382-4354-9a9d-95eea6356c5b?vd_dt_taken=#refresh=60" target="_blank">Visualization</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
