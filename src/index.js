import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.js'


// const rn = require('random-number');
// const indexes = [];
// export const gen = rn.generator ({
//     min:  0,
//     max:  20,
//     integer: true
// });

// for(let i=0; i<11; i++){
//   const pos = gen();
//   indexes.push(pos)
// }
// console.log(indexes);
// export {indexes};

// function generateRandCocktails() {
//   const totalCocktails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const randCocktails = totalCocktails.map((num) => 
//       gen());
//   const sortedRand = randCocktails.sort();
  
// }

// const indexes = generateRandCocktails();
// console.log(indexes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

