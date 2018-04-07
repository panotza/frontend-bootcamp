import { connect } from 'react-redux';
import { incrementBy } from '../actions/counter';
import Button from '../components/Button';

const mapDispatchToProps = {
  incrementBy
};

export default connect(null, mapDispatchToProps)(Button);
