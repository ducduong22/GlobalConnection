import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/stylesheets/css/Login.css";
import logo from "../assets/image/logoWeb.png";
import { useDispatch } from "react-redux";
import { loginRequest } from "../store/login/userSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailure] = useState("");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
    navigate("/homepage");
  };

  return (
    <div className="page">
      <div className="login-page d-flex flex-row bd-highlight">
        {/* Left side */}
        <div className="left p-2 bd-highlight">
          <h3 className="gradient-text">Global Connection</h3>
          <h4 className="text-white">
            Welcome <br />
            Start your journey <br />
          </h4>
        </div>
        {/* Right side */}
        <div className="right">
          <div className="form p-2 bd-highlight">
            <img className="logo-page-login" src={logo} alt="Logo" />
            <form onSubmit={handleSubmitLogin}>
              <div className="form-group">
                <input
                  className="label_input border border-dark mb-2"
                  type="email"
                  id="email"
                  placeholder="Email and phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="label_input border border-dark text-white mb-2"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="Login-button">
                  Login
                </button>
              </div>
            </form>
            {failed && <p style={{ color: "red" }}>{failed}</p>}
            <Link
              className="Forgot-link text-decoration-none"
              to="/login/forgot-password"
            >
              Forgot password?
            </Link>
            <div className="line"></div>
            <Link
              to="/login/create-account"
              className="Create-accout-button text-decoration-none"
            >
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
