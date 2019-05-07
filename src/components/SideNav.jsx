import React from 'react';
import { Link } from 'react-router-dom';

function SideNav(){
  return (
    <div>
      <style jsx>{`
        .sidebar {
          width: 100px;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          z-index: 999;
          background: #303030;
          color: #fff;
          transition: all 0.3s;
        }

        .sidebar.active {
          margin-left: -100px;
        }
        
        .sidebar .sidebar-header {
          padding: 20px;
          background: #303030;
          text-align: center;
        }

        .sidebar ul.components {
          padding: 20px 0;
          text-align: center;
        }

        .sidebar ul p {
          color: rgb(194, 194, 194);
          padding: 10px;
          text-align: center;
        }

        .sidebar ul li a {
          padding: 10px;
          /* font-size: 1.1em; */
          display: block;
          text-align: center;
        }

        .sidebar ul li a:hover {
          color: rgb(216, 216, 216);
        }

        .sidebar ul li.active > a, a[aria-expanded="true"] {
          color: rgb(37, 207, 128);
        }

        ul ul a {
          font-size: 0.9em !important;
          padding-left: 30px !important;
          text-align: center;
        }

        .fa-utensils, .fa-check, .fa-at, .fa-shopping-cart, .fa-seedling, .fa-plus {
          font-size: 3rem;
        }

        .fa-calendar-alt {
          color: #f48041;
          font-size: 50px;
        }

        .fa-book-open {
          font-size: 30px;
          color: #c41e3d;
        }
        
        .fa-utensils {
          color: #da394a;
        }
        
        .fa-check {
          color: #ffc857;
        }
        
        .fa-at {
          color: #ef798a;
        }
        
        .fa-shopping-cart {
          color: #ea8c55;
        }
        
        .fa-seedling {
          color: #ff696d;
        }
        
        .fa-search-plus {
          font-size: 50px;
          color: #3da599;
        }
        @media (max-width: 768px) {
          #sidebar {
              margin-left: -250px;
        }
        #content {
              width: 100%;
          }
          #sidebar.active {
              margin-left: 0;
          }
        }
      `}
      </style>
      <div>
        <nav className="sidebar">
          <ul className="list-unstyled components">
            <li className="active">
              <Link className="navlink" to="/events">EVENTS<br></br><i className="far fa-calendar-alt"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/menus">MENUS<br></br><i className="fas fa-book-open"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/dishes">DISHES<br></br><i className="fas fa-utensils"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/foods">FOODS<br></br><i className="fas fa-seedling"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/stores">STORES<br></br><i className="fas fa-shopping-cart"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/tasks">TASKS<br></br><i className="fas fa-check"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/invitees">INVITEES<br></br><i className="fas fa-at"></i></Link>
              <br></br>
              <br></br>
            </li>
            <li className="active">
              <Link className="navlink" to="/searchrecipes">RECIPE SEARCH<br></br><i className="fas fa-search-plus"></i></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );    
}

export default SideNav;

