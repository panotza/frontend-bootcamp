import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import './App.css';

class App extends Component {
  state = {
    showForm: false,
    nextId: 4,
    term: '',
    recipes: [
      {
        id: 1,
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      },
      {
        id: 2,
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      },
      {
        id: 3,
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "avocado_toast.jpg"
      }
    ]
  }

  handleShowForm = () => {
    this.setState({ showForm: true });
  }

  handleHideForm = () => {
    this.setState({ showForm: false });
  }

  handleSearch = (e) => {
    this.setState({ term: e.target.value });
  }

  addRecipe = (values) => {
    this.setState({
      recipes: [
        ...this.state.recipes,
        {
          id: this.state.nextId,
          title: values.title,
          instructions: values.instructions,
          ingredients: values.ingredients,
          img: values.img
        }
      ],
      nextId: this.state.nextId + 1,
      showForm: false
    });
  }

  deleteRecipe = (id) => {
    this.setState({
      recipes: this.state.recipes.filter(r => r.id !== id)
    });
  }

  render() {
    const { term } = this.state;
    // filter recipe according to search box text (case insensitive)
    const recipes = this.state.recipes.filter(r => r.title.toLowerCase().indexOf(term.toLowerCase()) > -1);

    return (
      <div className="app">
        <Navbar onShowForm={this.handleShowForm} />
        <div className="searchbox">
          Search:
          <input value={term} onChange={this.handleSearch}/>
        </div>
        <AddRecipeForm
          showForm={this.state.showForm}
          onSubmit={this.addRecipe}
          onDissmiss={this.handleHideForm}
        />
        <RecipeList recipes={recipes} onDelete={this.deleteRecipe}/>
        <Footer />
      </div>
    );
  }
}

export default App;
