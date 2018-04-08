import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipe';
import AddRecipeForm from '../components/AddRecipeForm';

export default connect(null, { addRecipe })(AddRecipeForm);
