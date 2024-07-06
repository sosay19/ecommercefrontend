import React from 'react';

const OverviewCards: React.FC = () => {
    const metrics = [
        { label: 'Total Orders', value: '1,234' },
        { label: 'Total Sales', value: '$12,345' },
        { label: 'New Customers', value: '567' },
        { label: 'Pending Orders', value: '89' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-4 shadow rounded-lg flex flex-col items-center text-center">
                    <div className="text-xl font-semibold">{metric.label}</div>
                    <div className="text-2xl font-bold mt-2">{metric.value}</div>
                </div>
            ))}
        </div>
    );
};

export default OverviewCards;
