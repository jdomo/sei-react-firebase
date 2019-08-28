import React from 'react';
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes' //gives us an object containing all exports in routes.js

const Navigation = () => (
  <div>
    <ul>
      <li>
        <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
      </li>
    </ul>
  </div>
)

export default Navigation;