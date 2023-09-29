import { Outlet } from "react-router-dom"
import Nabar from "../Comonents/Navbar/Nabar"


const MainLayout = () => {
    return (
        <div>
            <Nabar></Nabar>
            <Outlet></Outlet>
        </div>
    )
}

export default MainLayout
