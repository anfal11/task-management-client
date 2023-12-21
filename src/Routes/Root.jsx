import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
        <Footer />
        </>
    );
};

export default Root;