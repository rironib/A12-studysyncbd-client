import {Link, Outlet, useNavigate} from "react-router-dom";
import { RiBookFill, RiHome2Fill, RiHome4Fill, RiListCheck, RiMailAddFill, RiMenuFill, RiRestaurantFill, RiShoppingBag4Fill, RiTeamFill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin.jsx";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    if (!isAdmin) {
        navigate("/dashboard");
    }

    return (
        <>
            <div className='w-full min-h-screen flex'>
                <div className='min-h-screen min-w-[280px] w-max bg-[#D1A054] sticky top-0'>
                    <div className='p-6 font-cinzel space-y-2'>
                        <h1 className='font-bold text-3xl'>BISTRO BOSS</h1>
                        <h5 className='font-semibold text-2xl'>Restaurant</h5>
                    </div>
                    <div className='p-6 space-y-6 text-lg font-medium uppercase'>
                        <div className='grid gap-4 *:flex *:gap-2 *:items-center'>
                            <Link to='/admin'><RiHome4Fill/> Dashboard</Link>
                            <Link to='/admin/add-items'><RiRestaurantFill/> Add Items</Link>
                            <Link to='/admin/manage-items'><RiListCheck/> Manage Items</Link>
                            <Link to='/admin/manage-bookings'><RiBookFill/> Manage Bookings</Link>
                            <Link to='/admin/all-users'><RiTeamFill/> All Users</Link>
                        </div>
                        <div className="divider"></div>
                        <div className='grid gap-4 *:flex *:gap-2 *:items-center'>
                            <Link to='/'><RiHome2Fill/> Home</Link>
                            <Link to='/menu'><RiMenuFill/> Menu</Link>
                            <Link to='/shop'><RiShoppingBag4Fill/> Shop</Link>
                            <Link to='/contact'><RiMailAddFill/> Contact</Link>
                        </div>
                    </div>
                </div>

                <Outlet/>
            </div>
        </>
    );
};

export default Dashboard;
