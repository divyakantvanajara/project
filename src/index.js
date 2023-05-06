import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdminLayout from './AdminLayout';
import AdminHome from './AdminHome';
import AdminCategory from './AdminCategory';
import AdminInsertCategory  from './AdminInsertCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminProduct  from './AdminProduct';
import AdminInsertProduct  from './AdminInsertProduct';
import AdminEditProduct  from './AdminEditProduct';
import AdminOrders from './AdminOrders';
import AdminOrderDetail from './AdminOrderDetail';
import AdminUsers from './AdminUsers';
import Adminlogin from './Adminlogin';
import AdminChangePassword from './AdminChangePassword';
import AdminForgotPassword from './AdminForgotPassword';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLayout />}>
                    <Route path='/admin_home' element={< AdminHome />} />
                    <Route path='/admin_category' element={<AdminCategory />} />
                    <Route path='/admin_insert_category' element={<AdminInsertCategory />} />
                    <Route path='/admin_edit_category' element={<AdminEditCategory />} />
                    <Route path='/admin_product' element={< AdminProduct />} />
                    <Route path='/admin_insert_product' element={< AdminInsertProduct />} />
                    <Route path='/admin_edit_product' element={< AdminEditProduct />} />
                    <Route path='/admin_orders' element={<AdminOrders />} />
                    <Route path='/admin_orders_detail/:orderid' element={<AdminOrderDetail/>} />
                    <Route path='/admin_users' element={<AdminUsers />} />
                    <Route path='/admin_login' element={<Adminlogin />} />
                    <Route path='/admin_change_password' element={<AdminChangePassword/>} />
                    <Route path='/admin_forgot_password' element={<AdminForgotPassword/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
root.render(<MyRouter />);