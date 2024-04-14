const button = document.querySelector(".forecast-btn");
const title = document.querySelector(".current-forecast h1");
const text = document.querySelector(".current-forecast p");
const titleContainer = document.querySelector('.forecasts'); 

function createNewForecast(title, text) {
  const template = document.querySelector("#forecast-item");
  const newForeCast = template.content.cloneNode(true);
  newForeCast.querySelector("h3").textContent = title;
  newForeCast.querySelector("p").textContent = text;
  titleContainer.append(newForeCast);
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


button.addEventListener("click", function () {
  const number = getRandomInt(0,4);

  title.textContent = `Твое прекрасное предсказание — ${getRandomInt(0, 4)}`;
  switch (number) {
    case 0:
        title.textContent = `Скоро сбудется твое самое заветное желание`;
      break;
    case 1:
        title.textContent = `Завтра не будет планерки`;
      break;
    case 2:
        title.textContent = `Сегодня будет прекрасный день`;
      break;
    case 3:
        title.textContent = `Ты скоро увидишь китов`;
      break;
    case 4:
        title.textContent = `Впереди тебя ждет много прекрасного`;
      break;
    default:
  }
  
  text.textContent = `Вероятность — ${getRandomInt(0, 100)}%`;
  createNewForecast(title.textContent, text.textContent);
});


/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const button = document.querySelector(".forecast-btn");
const title = document.querySelector(".current-forecast h1");
const text = document.querySelector(".current-forecast p");
const titleContainer = document.querySelector('.forecasts'); 

function createNewForecast(title, text) {
  const template = document.querySelector("#forecast-item");
  const newForeCast = template.content.cloneNode(true);
  newForeCast.querySelector("h3").textContent = title;
  newForeCast.querySelector("p").textContent = text;
  titleContainer.prepend(newForeCast);
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


button.addEventListener("click", function () {
  const number = getRandomInt(0,5);

  
  switch (number) {
    case 0:
        title.textContent = `Скоро сбудется твое самое заветное желание`;
      break;
    case 1:
        title.textContent = `Завтра не будет планерки`;
      break;
    case 2:
        title.textContent = `Сегодня будет прекрасный день`;
      break;
    case 3:
        title.textContent = `Ты скоро увидишь китов`;
      break;
    case 4:
        title.textContent = `Впереди тебя ждет много прекрасного`;
      break;
    default:
  }
  
  text.textContent = `Вероятность — ${getRandomInt(0, 100)}%`;
  createNewForecast(title.textContent, text.textContent);
});
