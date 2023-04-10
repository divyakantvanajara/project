import { Link, Outlet } from "react-router-dom"
var AdminLayout  = () => {
    return (<div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_category">Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_change_password">Change password</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin_forgot_password">Forgot password</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>)
}
export default AdminLayout