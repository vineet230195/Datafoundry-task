import React from 'react'
import {Link,Route,BrowserRouter} from 'react-router-dom'
import Login from './sidebar-components/Login'
import UserListing from './components/UserList'
import SidebarMenu from './sidebar-components/Sidebar'
import Table from './pagination-components/AppHooks'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/task1'>Task 1</Link>|
        <Link to='/task2'>Task 2</Link>|
        <Link to='/task3'>Task 3</Link>|
        

        <Route path='/task1' component={Table}/>
        <Route path='/task2' component={Login} exact={true}/>
        <Route path='/task2/sidebar' component={SidebarMenu}/>
        <Route path='/task3' component={UserListing}/>
       
        
    </div>
    </BrowserRouter>
    
  )
}

export default App;
