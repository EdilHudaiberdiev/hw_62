import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Edil's App</span>
        <ul className="navbar-nav mr-auto fles-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link">About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/social-responsibility" className="nav-link">Social responsibility</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;