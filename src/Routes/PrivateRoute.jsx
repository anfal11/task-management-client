/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user, loading} = useAuth();
    if(loading){
        return (
            
                <div className="flex justify-center items-center mt-10">
                <Puff
  height="80"
  width="80"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
                </div>
           
        )
    }

    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/login" />;
};

export default PrivateRoute;