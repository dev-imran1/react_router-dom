import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav_wrapper'>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='about'>About</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='service'>Service</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav