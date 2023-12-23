import { Link, useNavigate } from "react-router-dom";

export const Friend2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={navigate("/")} className="navigationLink">
        Back
      </Link>
      <h1>About Friend2</h1>
      <p>Age:19</p>
      <p>Hobby:Uknown</p>
    </div>
  );
};
