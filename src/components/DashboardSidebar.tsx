// components/DashboardSidebar.tsx
import React from 'react';
import { FaBars, FaTimes, FaHome, FaShoppingCart, FaBox, FaCogs, FaUsers, FaChartBar } from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <aside className={`transition-transform duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} bg-gray-700 text-white  p-4 shadow-lg relative`}>
            <button
                onClick={toggleSidebar}
                className={`absolute top-4 left-0 p-2 ${isOpen ? '-ml-4' : 'ml-2'} bg-gray-600 text-white rounded-full hover:bg-gray-500 transition-transform duration-300 ease-in-out`}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className="mt-10">
                <a href="#" className={`block py-2 px-4 rounded ${isOpen ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:bg-gray-600'} flex items-center`}>
                    <FaHome className="text-lg mr-2" />
                    {isOpen && <span>Dashboard</span>}
                </a>
                <a href="#" className={`block py-2 px-4 rounded ${isOpen ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:bg-gray-600'} flex items-center`}>
                    <FaShoppingCart className="text-lg mr-2" />
                    {isOpen && <span>Orders</span>}
                </a>
                <a href="#" className={`block py-2 px-4 rounded ${isOpen ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:bg-gray-600'} flex items-center`}>
                    <FaBox className="text-lg mr-2" />
                    {isOpen && <span>Products</span>}
                </a>
                <a href="#" className={`block py-2 px-4 rounded ${isOpen ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:bg-gray-600'} flex items-center`}>
                    <FaCogs className="text-lg mr-2" />
                    {isOpen && <span>Customizations</span>}
                </a>
                <a href="#" className={`block py-2 px-4 rounded ${isOpen ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:bg-gray-600'} flex items-center`}>
                    <FaUsers className="text-lg mr-2" />
                    {isOpen && <span>Users</span>}
                </a>
                <a href="#" className={`block py-2 px-4 rounded ${isOpen ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:bg-gray-600'} flex items-center`}>
                    <FaChartBar className="text-lg mr-2" />
                    {isOpen && <span>Reports</span>}
                </a>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;
