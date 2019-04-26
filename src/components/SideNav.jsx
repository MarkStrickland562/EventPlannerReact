import React from 'react';
import { Link } from 'react-router-dom';

function SideNav(){
  return (
    <div>
      <style jsx>{`

      `}
      </style>
      <div>
        <nav>
          <ul class="list-unstyled components">
            <li class="active">
              <Link to="/events">EVENTS<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/menus">MENUS<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/menu-items">DISHES<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/menu-items-ingredients">FOODS<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/stores">STORES<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/tasks">TASKS<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/invitees">INVITEES<br><i class="fas fa-plus"></i></Link>
            </li>
            <li class="active">
              <Link to="/recipes">RECIPE SEARCH<br><i class="fas fa-plus"></i></Link>
            </li>
          </ul>
        </nav>
    </div>
   </div>
  );    
}

export default SideNav;

