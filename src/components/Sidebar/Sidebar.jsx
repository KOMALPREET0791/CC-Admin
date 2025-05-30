import { assets } from '../../assets/assets'
import "./Sidebar.css"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Admin Profile Picture */}
      <div className="profile-container">
      <img src="https://logodix.com/logo/1707097.png" alt="Admin Profile" className="profile-pic" />

      </div>

      {/* Sidebar Options */}
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="Add Icon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="Order Icon" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="Order Icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
