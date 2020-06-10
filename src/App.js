import React from 'react';
import './App.css';
import categoriesWithCountsArray from './data'

const categories = categoriesWithCountsArray.map( (item) => {
  return (
    <button>{item.category}</button>
  )
})

function App() {
  return (
    <div className="App">
        {categories}
    </div>
  );
}

export default App;
                       