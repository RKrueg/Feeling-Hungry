import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MealService from './meal-service';

function getMeal(meal) {
  let promise = MealService.getMeal(meal);
  console.log(promise)
  promise.then(function(mealDataArray) {
    printElements(mealDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(data) {
  document.querySelector('#showResponse').innerText = `Your perfect meal focused around ${data[1]} would be ${data[0].meals[0].strMeal}.\n Step by step instructions to make your significant other love the food you cooked:\n ${data[0].meals[0].strInstructions}`;
  console.log(data[0].meals[0].strMeal);
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