import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Electron app
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/work">Work</a>
          </li>
          <li tabIndex={0}></li>
        </ul>
        <div className="dropdown dropdown-end"></div>
      </div>
    </div>
  );
};
