import { useContext, useEffect, useState } from "react";
import img from "../../assets/others/authentication1.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Components/Provider/AuthProviders";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const User = result.user;
        console.log(User);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));

    Swal.fire({
      title: "Login in success full",
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
  };

  const handelValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={img} className="h-full" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl text-center font-bold text-blue-700 mt-4">
              Login now!
            </h1>
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handelValidateCaptcha}
                  placeholder="Type the text above"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button className="btn  btn-info btn-xs">Info</button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={"login"}
                  disabled={disabled}
                  className="btn btn-primary"
                />
              </div>
              <p>
                New here? Create a New Account ...
                <Link to="/singUp">
                  <span className="text-blue-700">sing up</span>
                </Link>
              </p>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
