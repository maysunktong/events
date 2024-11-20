// pengolin
const showContent = (event) => console.log(event.target.textContent);
document.querySelector(".pengolin").onclick = showContent;

// panther
const showTag = (e) => console.log(e.target.tagName);
document.querySelector(".panther").onclick = showTag;

// parrot
const showContentUpperCase = (e) =>
  console.log(e.target.textContent.toUpperCase());
document.querySelector(".parrot").onclick = showContentUpperCase;

// header alert hi when click only
const sayHi = (name) => alert("Hi," + name + "!");
document.querySelector(".header").onclick = () => sayHi("May");

// pelican
const pelicanLove = () => {
  for (let i = 0; i < 3; i++) {
    console.log("I love pelican!");
  }
};
document.querySelector(".pelican").addEventListener("click", pelicanLove);

const birdLove = (animal) => console.log(`${animal} is a pretty boy`);

document
  .querySelector(".parrot")
  .addEventListener("click", (e) => birdLove(e.target.textContent));
document
  .querySelector(".peacock")
  .addEventListener("click", (e) => birdLove(e.target.textContent));

// porcupine
const notAnteater = () => console.log("I am not an anteater.");
const notArmadillo = () => console.log("I am not an armadillo.");

// show only the last log ("I am not an armadillo.")
// document.querySelector(".porcupine").onclick = notAnteater;
// document.querySelector(".porcupine").onclick = notArmadillo;

// show both logs
document.querySelector(".porcupine").addEventListener("click", notAnteater);
document
  .querySelector(".porcupine")
  .addEventListener("click", notArmadillo, { once: true });

// show element you clicked on
// window.onclick = (e) => console.log(e.target);

// show element clicked in upper case
// window.onclick = (e) => console.log(e.target.textContent.toUpperCase());

//
// let x = document.querySelectorAll(".tab");
// let tabs = Array.from(x);

// tabs.forEach((tab) =>
//   tab.addEventListener("click", () => alert(tab.textContent))
// );

const bestAnimal = (animal) => {
  console.log(
    animal.toLowerCase() === "panther"
      ? `${animal} is the jungle assaasin `
      : `${animal} is the best!`
  );
};
const animalTabs = Array.from(document.querySelectorAll(".tab"));
console.log(animalTabs);
animalTabs.forEach((tab) =>
  tab.addEventListener("click", () => bestAnimal(tab.textContent))
);

// BUBBLING 🫧 (show the innest element first)
document
  .querySelector("footer")
  .addEventListener("click", () => console.log("Footer"));

// set to True, that element appears first
document
  .querySelector("footer p")
  .addEventListener("click", () => console.log("Paragraph"), true);
document
  .querySelector("footer p span")
  .addEventListener("click", () => console.log("Span"));

// set active button by adding and removing class
const setActive = (clicked) => {
  animalTabs.forEach((tab) => tab.classList.remove("active"));
  clicked.classList.add("active");
  document.querySelector(".header__title").textContent = clicked.textContent;
};
animalTabs.forEach((tab) =>
  tab.addEventListener("click", () => setActive(tab))
);

// mouse enter and mouse leave
let animalContent = Array.from(document.querySelectorAll(".content"));

const findContentBox = (classToMatch) => {
  animalContent.forEach((contentDiv) => {
    if (contentDiv.classList.contains(classToMatch)) {
      contentDiv.classList.add("featured");
    } else {
      contentDiv.classList.remove("featured");
    }
  });
};

animalTabs.forEach((tab) => {
  tab.addEventListener("mouseenter", () =>
    findContentBox(tab.textContent.toLowerCase())
  );
});

animalTabs.forEach((tab) => {
  tab.addEventListener("mouseleave", () =>
    animalContent.forEach((contentDiv) =>
      contentDiv.classList.remove("featured")
    )
  );
});

const findTab = () => {
  animalTabs.forEach((tab) => {
    if (tab.textContent.toLowerCase().includes(searchInput.value)) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
};

let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", findTab);

// array method push
// let countries = ["Australia", "Sweden", "Thailand", "India", "Singapore"];
// countries.push("Tibet");
// console.log(countries);

// object
let australia = {
  name: "Australia",
  capital: "Canberra",
  population: 25.7,
  language: "English",
  currency: "AUD",
  sports: ["Cricket", "Tennis"],
};

console.log(
  `There are ${australia.population} M people living in ${australia.name}.`
);

function Country(name, capital, population, language, currency, sports) {
  this.name = name;
  this.capital = capital;
  this.population = population;
  this.language = language;
  this.currency = currency;
  this.sports = sports;
  this.description = () =>
    console.log(`${this.name}'s capital city is ${this.capital}`);
}

let norway = new Country("Norway", "Oslo", 5.3, "Norwegian", "NOK", [
  "Football",
  "Handball",
]);
let singapore = new Country("Singapore", "Singapore", 5.69, "English", "SGD", [
  "Football",
  "Cricket",
]);
let thailand = new Country(
  "Thailand",
  "Bangkok",
  69.5,
  "Thai",
  "THB",
  ["Muay Thai", "Football"]
)

let countries = [norway, singapore, thailand];
countries.forEach((country) => country.description());
console.log(countries)
