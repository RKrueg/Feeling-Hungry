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

// let text = data.results.map(meal => `${meals.category}<br>
// ${meals.strMeal}<br>
// ${meals.strArea}<br>
// ${meals.strInstructions}<br>
// ${question.question}<br><br>`).join('');

// document.getElementById("demo").innerHTML = text;

// let text = "";
// for(let i = 0; i < data.results.length; i++){

//     text += data.results[i].category + "<br>"
//     + data.results[i].correct_answer + "<br>"
//     + data.results[i].difficulty + "<br>"
//     + data.results[i].incorrect_answers + "<br>"
//     + data.results[i].question + "<br><br><br>"
// }


// document.getElementById("demo").innerHTML = text;




function printElements(data) {
  console.log(data[0])
  let text = "";
  // for (let i = 0; i < data.length; i++) {
  for (let i = 0; i < data[0].meals.length; i++) {
    text += `\n Your perfect meal focused around ${data[1]} would be ${data[0].meals[i].strMeal}.\n \n Step by step instructions to make your significant other love the food you cooked:\n \n ${data[0].meals[i].strInstructions} \n \n`;
    // image += `${data[0].meals[i].strMealThumb}`
    // text += "\n Your date meal is: " + data[0].meals[i].strMeal + "\n \n" + "This is a " + data[0].meals[i].strArea + " meal." + "\n \n" + "Follow Instructions Below!" + "\n \n " + data[0].meals[i].strInstructions + "\n" + "\n"
  }
  document.querySelector('#showResponse').innerText = text;
  let html = <div class = "showImage"> 
  <img src = "${data[0].meal[i].strMealThumb}" alt = ""></img>
  </div>
  ;
  document.querySelector('showImage').innerHTML = html;
  // document.querySelector('#showImage').innerHTML = image;
  // document.getElementById('displayImage').innerHTML = null;
  // let img = document.createElement('img');

  // document.querySelector('#showResponse').innerText = `\n + Your perfect meal focused around ${data[1]} would be ${data[0].meals[i].strMeal}.\n Step by step instructions to make your significant other love the food you cooked:\n ${data[0].meals[i].strInstructions}`;
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