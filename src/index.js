import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MealService from './meal-service';

function getMeal(meal) {
  let promise = MealService.getMeal(meal);
  console.log(promise)
  promise.then(function (mealDataArray) {
    printElements(mealDataArray);
  }, function (errorArray) {
    printError(errorArray);
  });
}

function printElements(data) {
  console.log(data[0])
  let text = "";
  //const dishIngredients = [];
  for (let i = 0; i < data[0].meals.length; i++) {
   // if (data[0].meals[`strIngredient${i}`]) {
   //   dishIngredients.push(`${data[0].meals[`strIngredient${i}`]}`)
    
   // console.log(data[0].meals[`strIngredient${i}`])
    text += `<div class="dish"> <h3 class="dishName"> ${data[0].meals[i].strMeal}</h3></div>
    <div class="showArea"><h5>${data[0].meals[i].strArea} meal</h5></div>
    <div class="showImg"> <img src="${data[0].meals[i].strMealThumb}"/></div>
    <div class="showInstructions"><h5>Directions</h5></div>
    <a href=${data[0].meals[i].strYoutube}>Check Out How To Video Here!</a>
    <p class="instructions">${data[0].meals[i].strInstructions}</p>`;
}
  document.querySelector('#showResponse').innerHTML = text;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the meal data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const meal = document.querySelector('#meal').value;
  document.querySelector('#meal').value = null;
  getMeal(meal);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});