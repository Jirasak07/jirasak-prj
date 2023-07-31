import React from 'react'
import {Routes as RS ,Route} from 'react-router-dom'
import MainLayoute from './Layout/Main-Layoute';
import Home from './COMPONENT/Home';
import ListFlower from './COMPONENT/ListFlower'
import ListUser from './COMPONENT/ListUser';
import Report from './COMPONENT/Report';
import ManageUser from './COMPONENT/ManageUser';

function Routes() {
  return (
    <div>
      <RS>
        <Route/>
        <Route path='/' element={<MainLayoute/>} >
            <Route path='/home' element={<Home/>} />
            <Route path='/list-data' element={<ListFlower/>} />
            <Route path='/list-user' element={<ListUser/>} />
            <Route path='/manage-user' element={<ManageUser/>} />
            <Route path='/report' element={<Report/>} />
        </Route>
      </RS>
    </div>
  )
}

export default Routes
