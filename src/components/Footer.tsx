import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="p-4 bg-gray-800 text-white text-center shadow-inner">
            <div className="text-sm">
                <a href="#" className="px-4 hover:underline">Support</a>
                <a href="#" className="px-4 hover:underline">Privacy Policy</a>
                <a href="#" className="px-4 hover:underline">Terms of Service</a>
            </div>
            <div className="text-xs mt-2">© 2024 Admin Dashboard. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
