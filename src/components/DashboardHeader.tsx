import React from 'react';

const DashboardHeader: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
            <div className="text-xl font-bold">Admin Dashboard</div>
            <div className="flex items-center space-x-4">
                <span className="font-medium">Admin</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
            </div>
        </header>
    );
};

export default DashboardHeader;
