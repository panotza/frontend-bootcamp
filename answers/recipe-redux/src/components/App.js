import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RecipeListContainer from '../containers/RecipeListContainer';
import AddRecipeFormContainer from '../containers/AddRecipeFormContainer';
import './App.css';

class App extends Component {
  state = {
    showForm: false,
    term: '',
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

  render() {
    const { term, showForm } = this.state;
    return (
      <div className="app">
        <Navbar onShowForm={this.handleShowForm} />
        <div className="searchbox">
          Search:
          <input value={term} onChange={this.handleSearch}/>
        </div>
        <AddRecipeFormContainer
          showForm={showForm}
          onDissmiss={this.handleHideForm}
        />
        <RecipeListContainer searchTerm={term}/>
        <Footer />
      </div>
    );
  }
}

export default App;
