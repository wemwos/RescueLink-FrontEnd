import React from 'react';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';

function Layout() {
  return (
    <div className="container-fluid p-0 vw-100 vh-100 d-flex flex-column layout-container position-relative">
      <Header />
      <div className="row w-100 h-100 m-0 overflow-hidden">
        <div className="col-2 p-0">
          <SideNav />
        </div>
        <div className="col overflow-auto p-0 m-0 container-parent h-100" style={{ backgroundColor: '#E4E4E4' }}>
          {/* Content goes here */}
        </div>
      </div>
    </div>
  );
}

export default Layout;
