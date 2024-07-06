export const orders = [
    { id: '001', name: 'John Doe', date: '2024-07-01', status: 'Shipped', amount: '€100' },
    { id: '002', name: 'Jane Smith', date: '2024-07-02', status: 'Pending', amount: '€200' },
    { id: '003', name: 'Alice Johnson', date: '2024-07-03', status: 'Delivered', amount: '€150' },
    { id: '004', name: 'Bob Brown', date: '2024-07-04', status: 'Pending', amount: '€50' },
    { id: '005', name: 'Charlie Davis', date: '2024-07-05', status: 'Shipped', amount: '€75' },
];

export const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Sales',
            data: [50, 100, 150, 200, 250, 300, 350],
            borderColor: '#61dafb',
            backgroundColor: 'rgba(97, 218, 251, 0.2)',
            fill: true,
        },
    ],
};
