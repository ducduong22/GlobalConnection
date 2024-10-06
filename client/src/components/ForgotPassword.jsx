import "../assets/stylesheets/css/ForgotPassword.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/image/logoWeb.png";

export const ForgotPasswordPage = () => {
  return (
    <div className="Fw-page">
      <div className="header d-flex flex-row p-2">
        <div className="p-1 w-100 header-left-logo ">
          <img className="logo-fw" src={logo} />
        </div>
        <div className="p-2 flex-shrink-1 ">
          <div className="button-login">
            <Link className="login-link text-decoration-none" to="/login">
              <div className="d-flex">
                <div className="p-2 text-white">Login</div>
                <i className="pt-3 fa-solid fa-rotate-left text-white"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div className="Fw-form ">
            <h2 className="Fw-label border-bottom text-white">
              Find your account
            </h2>
            <div className="Fw-body ">
              <div className="label-request text-white">
                Please enter your email or mobile number to search for your
                account.
              </div>

              <input
                type="text"
                className="find-accout border border-dark"
                name="email"
                placeholder="Email or mobile number"
                // aria-label="Email or mobile number"
              ></input>
            </div>
            <div className="Fw-button d-flex flex-row-reverse border-top">
              <button className="button-search text-white">Search</button>
              <Link to="/login/" className="button-cancel ">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
