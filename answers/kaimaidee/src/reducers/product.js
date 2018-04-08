const initialState = [
  { id: 1, title: 'apple', price: 50, img: 'https://www.thealternativedaily.com/pages/images/acv/img-apple1.jpg' },
  { id: 2, title: 'kiwi', price: 70, img: 'https://www.organicfacts.net/wp-content/uploads/2013/07/Kiwi.jpg' },
  { id: 3, title: 'mango', price: 25, img: 'https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg' }
];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
