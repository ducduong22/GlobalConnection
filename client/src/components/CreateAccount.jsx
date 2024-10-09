import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/stylesheets/css/CreateAccount.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerRequest } from "../store/login/userSlice";
import logo from "../assets/image/logoWeb.png";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(registerRequest({ name, email, password }));
      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="page">
      <div className="login-page d-flex flex-row bd-highlight">
        {/*=============================left================================ */}
        <div className="left p-2 bd-highlight">
          <h3 className="gradient-text-register">Global Connection </h3>
          <h4 className="text-white">
            Welcome <br />
            Create an account to connect with your friends <br />
          </h4>
        </div>
        {/*=============================right================================ */}
        <div className="right">
          <div className="form p-2 bd-highlight">
            <img className="logo-page-register" src={logo} alt="Logo" />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  className="label_input border border-dark mb-2"
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="label_input border border-dark mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="label_input border border-dark mb-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="label_input border border-dark mb-2"
                  id="confirm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {/*=============================button================================ */}
              <div className="line"></div>
              <div className="form-button">
                <Button type="submit" className="button-sign-up">
                  Register
                </Button>

                {status === "failure" && (
                  <p style={{ color: "red" }}>
                    Please fill in all fields completely or check passwords.
                  </p>
                )}
              </div>
              <div className="form-button">
                <div className="d-flex mb-3 mt-1">
                  <div className="text-white p-2">Already have an account?</div>
                  <Link className="p-2" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
