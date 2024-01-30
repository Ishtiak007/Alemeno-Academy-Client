import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Courses from "../Pages/Home/Courses/Courses";
import CoursesDetails from "../Pages/Home/Courses/CoursesDetails";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Payment/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courseCategories',
                element: <Courses></Courses>
            },
            {
                path: '/coursesDetails/:id',
                element: <PrivateRoutes><CoursesDetails></CoursesDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // e gulo normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
        ]
    }
]);