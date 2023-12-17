import React from 'react'
import ReactDOM from 'react-dom/client'
import Customer from './Customer.jsx'
import {ChakraProvider, Text} from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup";
import AuthProvider from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import Home from "./Home.jsx";
import Notes from "./Notes.jsx";
import Recipes from "./Recipes.jsx";

const { ToastContainer } = createStandaloneToast();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute><Home/></ProtectedRoute>
    },

    {
        path: "/dashboard/customers",
        element: <ProtectedRoute><Customer /></ProtectedRoute>
    },

    {
        path: "/dashboard/notes",
        element: <ProtectedRoute><Notes /></ProtectedRoute>
    },
    {
        path: "/dashboard/recipes",
        element: <ProtectedRoute><Recipes /></ProtectedRoute>
    }

])

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
                <ToastContainer />
            </ChakraProvider>
        </React.StrictMode>
    );
