import { Link } from "react-router-dom";

import "./styles.css";

export const HomePage = () => {
  return (
    <div>
      <button>
        <Link to="/friend1" className="navigationLink">
          Friend1
        </Link>
      </button>
      <button>
        <Link to="/friend2" className="navigationLink">
          Friend2
        </Link>
      </button>
    </div>
  );
};
