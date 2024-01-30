import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Courses from "../Pages/Home/Courses/Courses";
import CoursesDetails from "../Pages/Home/Courses/CoursesDetails";

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
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    },
]);