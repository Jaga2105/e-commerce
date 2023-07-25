
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
import Protected from './features/auth/Protected'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from './features/auth/authSlice'
import { useEffect } from 'react'
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice'
import PageNotFound from './pages/404'
import OrderSuccessPage from './pages/OrderSuccessPage'
import UserOrderPage from './pages/UserOrderPage'
import UserProfilePage from './pages/UserProfilePage'
import { fetchLoggedInUserAsync } from './features/user/userSlice'
import Logout from './features/auth/Logout'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
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
    element:(
      <Protected>
        <CartPage/>
      </Protected>
    ) 
  },
  {
    path: "/checkout",
    element:(
      <Protected>
        <CheckOutPage/>
      </Protected>
    ) ,
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
    path: "/product-details/:id",
    element: (
      <Protected>
        <ProductDetailsPage/>
      </Protected>
    )
  },
  {
    path:"/order-success/:id",
    element: <OrderSuccessPage/>
  },
  {
    path:"/orders",
    element: <UserOrderPage/>
  },
  {
    path:"/profile",
    element: <UserProfilePage/>
  },
  {
    path:"/logout",
    element: <Logout/>
  },
  {
    path:"/forgot-password",
    element: <ForgotPasswordPage/>
  },
  {
    path:"*",
    element: <PageNotFound/>
  },
  
])

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch, user])

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
