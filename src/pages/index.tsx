import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import OverviewCards from '../components/OverviewCards';
import OrderSummaryTable from '../components/OrderSummaryTable';
import SalesChart from '../components/SalesChart';
import QuickActions from '../components/QuickActions';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <DashboardSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex flex-col flex-1 transition-all duration-300 ease-in-out`}>
                <DashboardHeader />
                <main className="flex-1 overflow-y-auto p-4">
                    <OverviewCards />
                    <OrderSummaryTable />
                    <SalesChart />
                    <QuickActions />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
