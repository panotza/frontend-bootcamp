import { connect } from 'react-redux';
import { getCartProducts } from '../reducers';
import MyCart from '../components/MyCart';

const mapStateToProps = state => ({
  cart: getCartProducts(state)
});

export default connect(mapStateToProps)(MyCart);
