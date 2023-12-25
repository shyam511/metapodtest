import Slide from "../Components/slide";
import Control from "../Components/control";
import Activity from "../Components/activity";
import "../css/session.css";

export default function Session() {
  return (
    <div className="container">
      <div className="slide">
        <Slide />
      </div>
      <div className="activity">
        <Activity />
      </div>
      <div className="control">
        <Control />
      </div>
    </div>
  );
}
