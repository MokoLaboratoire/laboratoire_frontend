import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Routes/Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="rrd_link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="rrd_link" to="/coding">
            Coding
          </Link>
        </li>
        <li>
          <Link className="rrd_link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
