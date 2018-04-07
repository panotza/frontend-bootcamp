import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);
