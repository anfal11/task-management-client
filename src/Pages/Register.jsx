import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {

    const { createUser, userUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const image = form.get('image');

    console.log(image, name, email, password);

    const imgbbResponse = await axios.post(image_hosting_api, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const imageURL = imgbbResponse.data?.data?.url;
    console.log('image uplaoded to imgbb', imgbbResponse?.data);

    
    try {
      const res = await axios.post(
        'http://localhost:5000/users',
        {
          name,
          email,
          image: imageURL, 
        }
      );

      console.log('User registered in MongoDB:', res.data);

      if (res.data.insertedId) {
        const createUserResponse = await createUser(email, password);
        const userUpdateProfileResponse = await userUpdateProfile(name, imageURL, email);

        toast.success('User successfully created');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error registering user in MongoDB:', error);
      toast.error('Failed to create user. Please try again.');
    }
  };
    return (
        <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Welcome to Task Master, Register Here
        </h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Your Name</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="name"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Image</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="image"
              type="file"
              required
            />
          </div>
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
              Register
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center pb-8 mt-4">
          <h1 className="text-black">
            Already have an account?{" "}
            <Link className="underline" to="/register">
              {" "}
              Login Here
            </Link>
          </h1>

        </div>
      </div>
    </div>
    );
};

export default Register;