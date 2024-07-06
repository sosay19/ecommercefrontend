import React from 'react';

const QuickActions: React.FC = () => {
    return (
        <div className="p-4">
            <div className="bg-white p-4 shadow rounded-lg flex gap-4 justify-between">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Product</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Manage Customizations</button>
            </div>
        </div>
    );
};

export default QuickActions;
