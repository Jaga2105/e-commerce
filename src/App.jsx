
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import SignUpPage from './features/auth/SignUp'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'
import OrderSummary from './features/checkout/OrderSummary'
import Payment from './features/checkout/Payment'
import Address from './features/checkout/Address'
import ProductDetailsPage from './pages/ProductDetailsPage'
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
  },
  {
    path: "/checkout",
    element: <CheckOutPage/>,
    children: [
      {
        path: "/checkout",
        element: <Address/>
      },
      {
        path: "/checkout/ordersummary",
        element: <OrderSummary/>
      },
      {
        path: "/checkout/payment",
        element: <Payment/>
      }
    ]
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage/>
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
