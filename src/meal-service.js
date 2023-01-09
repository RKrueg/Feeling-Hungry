export default class MealService {
  static getMeal(meal) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, meal]);
        } else {
          reject([this, response, meal]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}