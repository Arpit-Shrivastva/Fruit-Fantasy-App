"use strict";
// Note:As per test requirement, Fruits API should be running on port 3000
function getFruits() {
    //Return the promise returned by the fetch() method
    fetch('http://localhost:3000/fruits/')
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            }
            else {
                console.error('Failed to fetch fruits');
            }
        })
        //Successful promise callback function should convert the response body text to json object and return the promise as result.
        .then(data => transform(data))
        .catch(error => {
            console.error('Failed to fetch fruits', error);
        });
    //Returned successful promise callback should call `transform()` method by passing the json object as argument
}
//Inside transform() function, iterate the json data passed as parameter.
//Then transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruits) {
    //call showFruit() function for each transformedFruit object
    const fruitsArr = [];
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        const transformedFruit = {
            id: fruit.id,
            name: fruit.name,
            image: fruit.image,
            unit: fruit.unit,
            price: fruit.price
        };
        fruitsArr.push(transformedFruit);
        showFruit(transformedFruit);
    }
}
//Inside showFruit() function, pass transformedFruit object as parameter
function showFruit(fruit) {
    //display each transformedFruit as card by creating HTML code as string and appending it to the div container
    const container = document.getElementById('fruits-container');
    const fruitCard = `
    <div class="card">
      <img src="${fruit.image}" alt="${fruit.name}" class="card-img-top">
      <div class="card-body bg-light">
        <h5 class="card-title bg-light text-center">${fruit.name}</h5>
        <p class="card-text text-center bg-light ">Price:$ ${fruit.price} per lb</p>
      </div>
    </div>
  `;
    container.innerHTML += fruitCard;
}
//compiler error for "module" will be resolved once node_modules folder is generated by giving 'npm install' command in the terminal
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    getFruits
};
