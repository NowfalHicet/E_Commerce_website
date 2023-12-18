import React from 'react'
import NavigationBar from '../Component/NavigationBar'
import {Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <React.Fragment>
        <NavigationBar />
        <Outlet />
    </React.Fragment>
  )
}

export default RootLayout
