import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
