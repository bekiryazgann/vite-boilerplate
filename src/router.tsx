import {Routes, Route} from "react-router-dom";

// Middlewares
import DashboardMiddleware from "@/middleware/dashboard";

// Pages
import HomePage from "@/page/home";
import ContactPage from "@/page/contact";
import TodosPage from "@/page/todos";
import AdminHome from "@/page/admin/home";
import MainLayout from "@/layout/main";
import ErrorPage from "@/page/error";

const Router = () => (
    <Routes>
        <Route path="/" errorElement={<ErrorPage/>}>
            <Route path="*" element={<ErrorPage/>}/>
            <Route index={true} element={<HomePage/>}/>
            <Route path="/" element={<MainLayout/>}>

                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
            </Route>
            <Route path="/admin" element={
                <DashboardMiddleware>
                    <AdminHome/>
                </DashboardMiddleware>
            }/>
        </Route>
    </Routes>
)


export default Router
