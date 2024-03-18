import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;