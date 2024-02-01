import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FetchUserPage from './pages/FetchUserPage/FetchUserPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/users',
      element: <FetchUserPage />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
