import { Link } from "react-router-dom"
import "./nav.css"

const Nav = () => {
  return (
    <main className='mainIt'>
      <div>
        <h1>
          FIRETEXT
        </h1>
      </div>
    
      <div className="linkIt">
      <Link to="/home">
        Home
        </Link>
        <Link to="/fetch">
        Contact
        </Link>
        <Link to="/fetch/details/:id">
        Details
        </Link>
      </div>
    </main>
  )
}

export default Nav