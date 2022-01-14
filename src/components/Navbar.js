import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaAnkh, FaFire} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex 
                        flex-col bg-gray-900 text-white shadow-lg">
            <NavIcon icon={<FaFire size="28"/>}/>
            <NavIcon icon={<BsPlus size="32"/>}/>
            <NavIcon icon={<BsFillLightningFill size="20"/>}/>
            <NavIcon icon={<BsGearFill size="28"/>}/>
            <NavIcon icon={<FaAnkh size="20"/>}/>
        </div>
    )
}

const NavIcon = ({icon}) => {
    return (
        <div className="navbar-icon">
            {icon}
        </div>
    )
}


export default Navbar