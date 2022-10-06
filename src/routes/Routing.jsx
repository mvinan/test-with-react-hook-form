import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeView from '~/views/home/HomeView'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
