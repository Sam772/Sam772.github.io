import React from 'react'
import { BsHouseFill } from 'react-icons/bs';
import { FaGamepad, FaInfo} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex 
                        flex-col bg-gray-900 text-white shadow-lg">
            <NavIcon icon={<BsHouseFill size="30"/>}/>
            <NavIcon icon={<FaInfo size="30"/>}/>
            <NavIcon icon={<FaGamepad size="30"/>}/>
        </div>
    )
}

const NavIcon = ({icon, text = 'Home'}) => (
    <div className="navbar-icon group">
        {icon}
        <span class="navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)


export default Navbar