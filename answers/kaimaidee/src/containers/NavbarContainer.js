import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { getCartTotalQuantity } from '../reducers';

const mapStateToProps = state => ({
  cart: state.cart,
  totalQuantity: getCartTotalQuantity(state.cart)
});

export default connect(mapStateToProps)(Navbar);
