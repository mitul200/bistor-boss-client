// import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../../Components/Provider/AuthProviders";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getAuth, signInWithPopup } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
// import { app } from "../../../Components/Firebase/firebase.config";
// import Swal from "sweetalert2";

const SocialLogin = () => {
  // const auth = getAuth(app);
  // const googleProvider = new GoogleAuthProvider();
  // const { singInGoogle } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location?.state?.from?.pathname || "/";

  // const handelClick = () => {
  //   console.log("google mama is coming");
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //       // setUser(loggedUser)
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  // const handleGoogleLogin = async () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       Swal.fire({
  //         title: "User Created !",
  //         text: "New user has been created ! ",
  //         icon: "success",
  //       });
  //       console.log(loggedUser);
  //     })
  //     .catch((err) => {
  //       Swal.fire({
  //         title: "Error !",
  //         text: err.message,
  //         icon: "error",
  //       });
  //       console.log(err.message);
  //     });
  // };

  // const handelGoogleSingin = () => {
  //   singInGoogle().then((result) => {
  //     const loggedInUser = result.user;
  //     console.log(loggedInUser);
  //
  //   });
  //   // .catch((err) => console.error(err));
  // };
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
      </div>
      <div className=" flex justify-center mb-5">
        <button
          // onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          <FcGoogle className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
