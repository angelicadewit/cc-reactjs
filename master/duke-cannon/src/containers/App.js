import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import { connect } from 'react-redux';
import { removeItem, addItem } from '../actions';

import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Loader from './Loader';

const App = ({ data, items, cart, add, remove }) => (
  <main>
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Duke Cannon" />
        </header>
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" render={() => <Home data={data} />} />
        <Route path="/shop" render={() => <Shop items={items} add={add} />} />
        <Route
          path="/cart"
          render={() => <Cart cart={cart} remove={remove} />}
        />
      </div>
    </Router>
    <Loader />
  </main>
);

const mapStateToProps = state => ({
  data: state.configuration.data,
  cart: state.configuration.cart,
  items: state.configuration.items
});

const mapDispatchToProps = (dispatch, props) => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
