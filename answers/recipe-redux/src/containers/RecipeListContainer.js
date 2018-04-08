import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/recipe';
import RecipeList from '../components/RecipeList';

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { deleteRecipe })(RecipeList);
