import React, { Component } from 'react';
import './AddRecipeForm.css';

class AddRecipeForm extends Component {
  state = {
    title: '',
    instruction: '',
    ingredients: [''],
    img: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngChange = (e) => {
    const index = Number(e.target.name.split('-')[1]);
    this.setState({
      ingredients: this.state.ingredients.map((ing, i) => (
        i === index
        ? e.target.value
        : ing
      ))
    });
  }

  handleAddIng = () => {
    this.setState({ ingredients: [...this.state.ingredients, ''] });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRecipe(this.state);
    this.props.onDissmiss();
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    });
  }

  render() {
    if (!this.props.showForm) {
      return null;
    }

    const { title, instructions, ingredients, img } = this.state;
    const ingInput = ingredients.map((ing, i) => (
      <input
        key={i}
        type="text"
        name={`ingredient-${i}`}
        value={ingredients[i]}
        onChange={this.handleIngChange}
      />
    ));

    return (
      <div className="container">
        <div className="modal">
          <div className="modal-header">
            Add new recipe
            <span className="modal-dismiss" onClick={this.props.onDissmiss}>X</span>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              Title:<br/>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              Instructions:<br/>
              <input
                type="text"
                name="instructions"
                value={instructions}
                onChange={this.handleChange}
              />
              Ingredients:<br/>
              {ingInput}
              <div>
                <button type="button" className="btn add-ing" onClick={this.handleAddIng}>+</button>
              </div>
              <div style={{ clear: 'right' }} />
              Image:<br/>
              <input
                type="text"
                name="img"
                value={img}
                onChange={this.handleChange}
              />
              <div>
                <button type="submit" className="btn add-btn">Add recipe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipeForm;
