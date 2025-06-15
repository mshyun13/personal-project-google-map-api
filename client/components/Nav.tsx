import { Link } from 'react-router'

export default function Nav() {
  return (
    <div className="sideNav">
      <h2>Menu</h2>
      <Link to={'/'} className="nav_text">
        Add New Location
      </Link>
      <Link to={'/locations'} className="nav_text">
        View Location List
      </Link>
    </div>
  )
}
