import React from 'react';

const OrderSummaryTable: React.FC = () => {
    const orders = [
        { id: '001', customer: 'John Doe', date: '2024-07-06', status: 'Pending', amount: '$123' },
        { id: '002', customer: 'Jane Smith', date: '2024-07-05', status: 'Completed', amount: '$456' },
        { id: '003', customer: 'Emily Johnson', date: '2024-07-04', status: 'Shipped', amount: '$789' },
        { id: '004', customer: 'Michael Brown', date: '2024-07-03', status: 'Pending', amount: '$321' },
        { id: '005', customer: 'Jessica Davis', date: '2024-07-02', status: 'Completed', amount: '$654' },
    ];

    return (
        <div className="p-4">
            <div className="bg-white p-4 shadow rounded-lg">
                <div className="text-xl font-semibold mb-4">Recent Orders</div>
                <table className="w-full text-left border-separate border-spacing-0.5">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-2 text-gray-700">Order ID</th>
                            <th className="border-b-2 p-2 text-gray-700">Customer Name</th>
                            <th className="border-b-2 p-2 text-gray-700">Date</th>
                            <th className="border-b-2 p-2 text-gray-700">Status</th>
                            <th className="border-b-2 p-2 text-gray-700">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-gray-100">
                                <td className="border-b p-2">{order.id}</td>
                                <td className="border-b p-2">{order.customer}</td>
                                <td className="border-b p-2">{order.date}</td>
                                <td className="border-b p-2">{order.status}</td>
                                <td className="border-b p-2">{order.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderSummaryTable;
