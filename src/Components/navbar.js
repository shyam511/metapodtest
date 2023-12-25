import logo from "../media/logo.svg";
import "../css/navbar.css";

export default function Navigation() {
  return (
    <>
      <div className="navcontainer">
        <img src={logo} className="companylogo" />
        <div className="navbutton">
          <button type="button" className="buttontrynow">
            Try Now
          </button>
        </div>
      </div>
    </>
  );
}
