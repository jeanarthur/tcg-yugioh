import Home from './pages/Home'
import MyCollection from './pages/MyCollection'
import Shop from './pages/Shop'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/MyCollection',
    element: <MyCollection></MyCollection>
  },
  {
    path: '/Shop',
    element: <Shop></Shop>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
