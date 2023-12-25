import "../css/hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="herocontainer">
      <div className="heading">
        <h1>
          <i>Unbiased</i>
          <br /> Insurance Advice
        </h1>
      </div>
      <Link to="/session" className="trynowbutton2">
        <button type="button" className="buttontrynow">
          Talk to AI expert
        </button>
      </Link>
    </div>
  );
}
