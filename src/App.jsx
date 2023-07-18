
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import SignUpPage from './features/auth/SignUp'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
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
