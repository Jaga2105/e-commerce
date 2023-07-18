
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import SignUpPage from './features/auth/SignUp'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  }
])

function App() {

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
