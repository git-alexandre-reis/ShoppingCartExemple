import './NavBar.css';
import { React, useContext } from 'react';
import SearchBar from '../searchBar/SearchBar';
import{ BsFillHandbagFill } from 'react-icons/bs';
import { Cartcontext } from '../../context/Context';

const NavBar = () => {
  const { products, isCartVisible, setIsCartVisible } = useContext(Cartcontext);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h4> Cart <span> Example </span> </h4>
        </div>

        <SearchBar/>

        <div className="cart">
          <button 
            type="button"
            onClick={ () => setIsCartVisible(!isCartVisible) }
          >
            <BsFillHandbagFill/>
          </button>
          <span className={products.length > 0 ? 'count active' : 'count'}>{products.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
