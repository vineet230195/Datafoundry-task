import React from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';


const SideBarView = () => {
  
  const items = [
    <SidebarItem>Dashboard</SidebarItem>,
    <SidebarItem>Profile</SidebarItem>,
    <SidebarItem>Settings</SidebarItem>,
  ]

  return (
    <div className='container'>
      
      <Sidebar content={items}>
        
      </Sidebar>
    </div>
    
    )
}
export default SideBarView
