import React from "react";
import Sidebar from "react-sidebar";
 

 
class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      sidebarOpen: false
    }

  }
 
 
  onSetSidebarOpen=(open)=> {
    this.setState({ sidebarOpen: open });
  }
 

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <b>Main content</b>
      </Sidebar>
    );
  }
}
 
export default SidebarMenu;