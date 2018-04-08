import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { addCart } from '../actions/cart';

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, { addCart })(ProductList);
