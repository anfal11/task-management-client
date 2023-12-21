import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signInWIthMail, signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInWIthMail(email, password)
      .then(() => {
        toast.success("User successfully logged in ");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle().then((res) => {
        const user = res.user;
        const name = user?.displayName;
        const email = user?.email;
        const photoUrl = user?.photoURL;
        const userInfo = { name, email, photoUrl };
          axiosPublic.post("/users", userInfo)
          .then(res => {
             toast.success("user logged in successfully");
             navigate(location?.state ? location?.state : "/")
          })
          .catch(err => {
             toast.error(err.message);
          })
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Welcome to Task Master, Login Here
        </h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div>
            <button className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
              Log In
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center pb-8 mt-4">
          <h1 className="text-black">
            New here?{" "}
            <Link className="underline" to="/register">
              {" "}
              Create a New Account
            </Link>
          </h1>
          <h1 className="text-black flex items-center gap-1">
            Or sign in with{" "}
            <FcGoogle
              onClick={handleGoogleLogin}
              className="text-3xl cursor-pointer"
            />{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
