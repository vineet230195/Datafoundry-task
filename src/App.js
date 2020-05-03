import React from 'react'
import {Link,Route,BrowserRouter} from 'react-router-dom'
import Login from './Sidebar-components/Login'
import SideBarView from './Sidebar-components/Sidebar'
import UserListing from './CRUD-components/UserList'
import Table from './Hooks-components/AppHooks'

function App() {
  return (
    <BrowserRouter>
        <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 ">
                      <div className="container">
                      <strong className="navbar-brand">Task</strong>
                          <ul className="navbar-nav">
                              <li className='nav-item mr-2'><Link to="/task1">Task 1</Link></li>
                              <li className='nav-item mr-2'><Link to="/task2">Task 2</Link></li>
                              <li className='nav-item mr-2'><Link to="/task3">Task 3</Link></li>
                          </ul>
                      </div>
                  </nav>
        

        <Route path='/task1' component={Table}/>
        <Route path='/task2' component={Login} exact={true}/>
        <Route path='/task2/sidebar' component={SideBarView}/>
        <Route path='/task3' component={UserListing}/>
       
        
    </div>
    </BrowserRouter>
    
  )
}

export default App;
