import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <div className="wrapper login">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome to admin panel !</h2>
              <Link to="/" className="btn">
                Back to client
              </Link>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Login for Admin</h2>
              <form action="">
                <p>
                  <input type="text" placeholder="Username" required />
                </p>
                <p>
                  <input type="password" placeholder="Password" required />
                </p>
                <p>
                  <Link to={"/admin/panel"}>
                    <input type="submit" value="Login in" id="btn1" />
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
