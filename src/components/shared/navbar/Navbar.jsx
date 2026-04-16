
import vector from "../../../assets/Vector.png";
import clock from "../../../assets/Clock.png";
import chartline from "../../../assets/ChartLine.png";
import { Link } from "react-router";


const Navbar = () => {

  return (
    <div className="navbar bg-base-100 shadow-md px-6">

      {/* Left side */}
      <div className="navbar-start">
        <h1 className="text-xl font-bold">KeenKeeper</h1>
      </div>

      {/* RIGHT SIDE MENU (END ALIGNED) */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-6 items-center">

          <li>
            <Link to="/" className="flex items-center bg-green-500 text-white gap-2">
              <img src={vector} className="w-5 h-5" />
              Homepage
            </Link>
          </li>

          <li>
            <Link to="/timeline" className="flex items-center gap-2">
              <img src={clock} className="w-5 h-5" />
              Timeline
            </Link>
          </li>

          <li>
            <Link to="/stats" className="flex items-center gap-2">
              <img src={chartline} className="w-5 h-5" />
              Stats
            </Link>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default Navbar;