import { Link, useNavigate } from "react-router-dom";

export const Friend1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={navigate("/")} className="navigationLink">
        Back
      </Link>
      <h1>About Friend1</h1>
      <p>Age:17</p>
      <p>Hobby:Uknown</p>
    </div>
  );
};
