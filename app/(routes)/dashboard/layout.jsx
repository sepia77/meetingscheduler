"use client"; // Ensures this component is treated as a client-side component

import React from 'react';
import dynamic from 'next/dynamic';
import SideNavBar from './_components/SideNavBar';

// Dynamically import DashboardHeader to disable SSR for it
const DashboardHeader = dynamic(() => import('./_components/Dashboardheader'), {
  ssr: false, // Disable SSR for this component
});

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block md:w-64 bg-slate-100 h-screen fixed">
        <SideNavBar />
      </div>

      <div className="md:ml-64">
        {/* Now DashboardHeader is dynamically imported and will be rendered client-side */}
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
