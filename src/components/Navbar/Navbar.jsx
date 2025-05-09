import "./Navbar.css"
import { assets } from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <h1 className='logo-text'>CraveCart</h1>
        <span className='admin-panel'>Admin Panel</span> {/* Admin Panel text */}
      </div>
      
      {/* <img className='profile' src={assets.new_admin_profile || assets.profile_image} alt="Admin Profile" /> */}
    </div>
  )
}

export default Navbar
