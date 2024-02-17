let dishes = [
  {
    id: 0,
    menuType: "Beliebt",
    image: "./img/crunchyChicken.png",
    dish: "Crunchy Chicken",
    description:
      "mit gegrilltem Hühnerbrustfilet, Frischkäse, Paprika und Avocado",
    descriptionMenuType: "",
    price: 9.2,
    amount: 1,
  },
  {
    id: 1,
    menuType: "Beliebt",
    image: "./img/AvocadoHoso.png",
    dish: "Avocado Hoso Maki (vegan)",
    description: "mit Avocado",
    descriptionMenuType: "",
    price: 4.6,
    amount: 1,
  },
  {
    id: 2,
    menuType: "Beliebt",
    image: "./img/nudeln.png",
    dish: "Glasnudelsalat (vegetarisch)",
    description: "mit Glasnudeln und gemüse",
    descriptionMenuType: "",
    price: 4.7,
    amount: 1,
  },
  {
    id: 3,
    menuType: "Vorspeisen",
    image: "./img/edamame.png",
    dish: "Edamame (vegan)",
    description: "grüne, gesalzene Sojabohnen",
    descriptionMenuType: "",
    price: 3.3,
    amount: 1,
  },
  {
    id: 4,
    menuType: "Vorspeisen",
    image: "./img/trio.png",
    dish: "Asiatischer Vorspeisen-Mix",
    description: "mit drei Vorspeisen nach Wahl",
    descriptionMenuType: "",
    price: 6.0,
    amount: 1,
  },
  {
    id: 5,
    menuType: "Vorspeisen",
    image: "./img/nudeln.png",
    dish: "Glasnudelsalat (vegetarisch)",
    description: "mit Glasnudeln und Gemüse",
    descriptionMenuType: "",
    price: 4.7,
    amount: 1,
  },
  {
    id: 6,
    menuType: "Winterzeit",
    image: "./img/unagi.png",
    dish: "Unagi Hoso Maki",
    description: "mit gebackenem Süßwasseraal, Gurke und Unagi Soße",
    descriptionMenuType: "Aktion vom 04.01.2024 - 31.03.2024",
    price: 5.9,
    amount: 1,
  },
  {
    id: 7,
    menuType: "Winterzeit",
    image: "./img/crispyRäucherlachs.png",
    dish: "Crispy Räucherlachs Inside Out",
    description:
      "mit gebackenem Räucherlachs, Frischkäse, Frühlingszwiebel und Schnittlauchmantel",
    descriptionMenuType: "Aktion vom 04.01.2024 - 31.03.2024",
    price: 7.9,
    amount: 1,
  },
  {
    id: 8,
    menuType: "Winterzeit",
    image: "./img/crunchyVegan.png",
    dish: "Crunchy Vegan Hoso Maki",
    description: "mit veganem Lachs und Sweet Chili Dip",
    descriptionMenuType: "Aktion vom 04.01.2024 - 31.03.2024",
    price: 6.9,
    amount: 1,
  },
  {
    id: 9,
    menuType: "Winterzeit",
    image: "./img/crispyMango.png",
    dish: "Crunchy Mango Inside Out",
    description:
      "mit süßem Reis, Mango, Zitronenwaffel und Schokostreusel, mit Vanillesauce",
    descriptionMenuType: "Aktion vom 04.01.2024 - 31.03.2024",
    price: 5.9,
    amount: 1,
  },
  {
    id: 10,
    menuType: "Nigiri",
    image: "./img/sakeNigiri.png",
    dish: "Sake Nigiri",
    description: "mit Lachs",
    descriptionMenuType:
      "Es werden jeweils zwei Nigiri serviert. Alle Nigiri werden mit Gari, Sojasauce und Wasabi serviert.",
    price: 3.7,
    amount: 1,
  },
  {
    id: 11,
    menuType: "Nigiri",
    image: "./img/tekkaNigiri.png",
    dish: "Tekka Nigiri",
    description: "mit Tunfisch",
    descriptionMenuType:
      "Es werden jeweils zwei Nigiri serviert. Alle Nigiri werden mit Gari, Sojasauce und Wasabi serviert.",
    price: 5.2,
    amount: 1,
  },
  {
    id: 12,
    menuType: "Nigiri",
    image: "./img/kaniNigiri.png",
    dish: "Kani Nigiri",
    description: "mit Surimi",
    descriptionMenuType:
      "Es werden jeweils zwei Nigiri serviert. Alle Nigiri werden mit Gari, Sojasauce und Wasabi serviert.",
    price: 3.8,
    amount: 1,
  },
  {
    id: 13,
    menuType: "Nigiri",
    image: "./img/tamago.png",
    dish: "Tamago Nigiri (vegetarisch)",
    description: "mit japanischen Omlett",
    descriptionMenuType:
      "Es werden jeweils zwei Nigiri serviert. Alle Nigiri werden mit Gari, Sojasauce und Wasabi serviert.",
    price: 3.7,
    amount: 1,
  },
  {
    id: 14,
    menuType: "Nigiri",
    image: "./img/avocadoNigiri.png",
    dish: "Avocado Nigiri",
    description: "mit Avocado und Teriyaki Spezialsauce",
    descriptionMenuType:
      "Es werden jeweils zwei Nigiri serviert. Alle Nigiri werden mit Gari, Sojasauce und Wasabi serviert.",
    price: 3.7,
    amount: 1,
  },
  {
    id: 15,
    menuType: "Futo Maki",
    image: "./img/sakeFuto.png",
    dish: "Sake Futo Maki",
    description: "mit Lachs, Avocado und Gurke",
    descriptionMenuType:
      "Es werden jeweils acht Stück serviert. Alle Gerichte werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 9.0,
    amount: 1,
  },
  {
    id: 16,
    menuType: "Futo Maki",
    image: "./img/tekkaFuto.png",
    dish: "Tekka Futo Maki",
    description: "mit Tunfisch, Avocado und Gurke",
    descriptionMenuType:
      "Es werden jeweils acht Stück serviert. Alle Gerichte werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 9.2,
    amount: 1,
  },
  {
    id: 17,
    menuType: "Futo Maki",
    image: "./img/tempuraFuto.png",
    dish: "Tempura Chicken Futo Maki",
    description:
      "mit Tempura Chicken, Gurke und Avocado, dazu Mango-Chilli-Topping",
    descriptionMenuType:
      "Es werden jeweils acht Stück serviert. Alle Gerichte werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 8.3,
    amount: 1,
  },
  {
    id: 18,
    menuType: "Futo Maki",
    image: "./img/räucherlachsFuto.png",
    dish: "Räucherlachs Futo Maki",
    description: "mit Frischkäse und Lauch",
    descriptionMenuType:
      "Es werden jeweils acht Stück serviert. Alle Gerichte werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 9.0,
  },
  {
    id: 19,
    menuType: "Inside Out Rolls",
    image: "./img/sakeInside.png",
    dish: "Sake Inside-Out",
    description:
      "mit Surimi, Avocado, Gurke und Frischkäse im Fischrogen-Mantel",
    descriptionMenuType:
      "Es werden jeweils acht Stück seviert. Alle umgekehrten Reisrollen werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 7.4,
    amount: 1,
  },
  {
    id: 20,
    menuType: "Inside Out Rolls",
    image: "./img/tekkaInside.png",
    dish: "Tekka Inside-Out",
    description: "mit Thunfisch und Avocado im Sesam-Mantel",
    descriptionMenuType:
      "Es werden jeweils acht Stück seviert. Alle umgekehrten Reisrollen werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 7.8,
    amount: 1,
  },
  {
    id: 21,
    menuType: "Inside Out Rolls",
    image: "./img/spicyInside.png",
    dish: "Spicy Tekka Inside-Out (scharf)",
    description:
      "mit scharf mariniertem Thunfisch, Avocado und Frischkäse im Masago-Mantel",
    descriptionMenuType:
      "Es werden jeweils acht Stück seviert. Alle umgekehrten Reisrollen werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 8.8,
    amount: 1,
  },
  {
    id: 22,
    menuType: "Inside Out Rolls",
    image: "./img/californiaInside.png",
    dish: "California Inside-Out",
    description:
      "mit Surimi, Avocado, Gurke und Frischkäse im Fischrogen-Mantel",
    descriptionMenuType:
      "Es werden jeweils acht Stück seviert. Alle umgekehrten Reisrollen werden mit Gari, Wasabi und Sojasauce serviert.",
    price: 7.8,
    amount: 1,
  },
];

let categories = [
  "Beliebt",
  "Vorspeisen",
  "Winterzeit",
  "Nigiri",
  "Futo Maki",
  "Inside Out Rolls",
];

function renderCategorie() {
  for (let i = 0; i < categories.length; i++) {
    const categorie = categories[i];

    let currentList = dishes.filter((type) => type.menuType == categorie);

    document.getElementById(
      "mainContainer"
    ).innerHTML += `<div id="${categorie}" class="categorieTitle">${categorie}</div>`;

    renderMenu(currentList);
  }

  if (shoppingBasket.length === 0) {
    document.getElementById("basketItems").innerHTML = `
      <div class="emptyBasketText">
        <div><img class="bagLogoBig" src="./img/bag.png"></div>
        <h3>Ihr Warenkorb ist leer</h3>
      </div>`;
  }
}

function renderMenu(dishes) {
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];

    document.getElementById("mainContainer").innerHTML += `
        <div class="dishContainer">
        <div class="leftSideMenuContainer">
        <div class="headlineDishes">
          <h2 class="">${dish["dish"]}</h2>
          </div>
          <div class="pElementContainer">
          <p class="padding-left pElement">${dish["description"]}</p>
        </div>
        <div class="price">${dish["price"].toFixed(2).replace(".", ",")} €</div>
        </div>
      <div class="menuImageContainer">
      <img class="menuImage" src="${dish["image"]}" />
    </div>
      <div>
        <img class="plus" src="./img/plus.png" onclick="addToBasket(${
          dish.id
        })">
      </div>
    </div>`;
  }
}

let shoppingBasket = [];
let prices = [];
let amountBasket = [];

function addToBasket(i) {
  let name = dishes[i]["dish"];
  let price = dishes[i]["price"];
  let amount = dishes[i]["amount"];

  let index = shoppingBasket.indexOf(name);
  if (index == -1) {
    document.getElementById("basketItems").innerHTML = "";
    shoppingBasket.push(name);
    prices.push(price);
    amountBasket.push(1);
  } else {
    document.getElementById("basketItems").innerHTML = "";
    amountBasket[index]++;
  }

  updateShoppingBasket();
  renderBasket();
  renderCategorie();
}

function renderBasket() {
  for (let i = 0; i < shoppingBasket.length; i++) {
    const basket = shoppingBasket[i];
    const price = prices[i];
    const amounts = amountBasket[i];
    let finalPrice = amounts * price;

    document.getElementById("basketItems").innerHTML += `
    
    <div class="amountDishPrice">
    <div>
    ${amounts}
    ${basket}
    </div>
    <div>${finalPrice.toFixed(2).replace(".", ",")}€</div>
    </div>
    <div class="basketIcons">
      <img onclick="deleteDish(${i})" class="trashIcon"src="./img/trash.png">
      <img onclick="increaseDish(${i})" class="minusAndPlusIcons"src="./img/plus.png">
      <img onclick="decreaseDish(${i})" class="minusAndPlusIcons"src="./img/minus.png">
    </div>`;
  }
}

function updateShoppingBasket() {
  let sum = 0;

  var abholenDiv = document.getElementById("take");
  var liefernDiv = document.getElementById("deliver");

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i] * amountBasket[i];
  }
  let finalSum = sum + 1;

  if (abholenDiv.style.backgroundColor === "white") {
    document.getElementById("costsConatiner").innerHTML = `
  
       <div id="costs"> 
          Zwischensumme: ${sum.toFixed(2).replace(".", ",")}<br>
          Lieferkosten: 0€<br>
          Gesamt: ${sum.toFixed(2).replace(".", ",")}
       </div>
  `;
  } else {
    abholenDiv.style.backgroundColor = "lightgrey";

    document.getElementById("costsConatiner").innerHTML = `
  
       <div id="costs"> 
          Zwischensumme: ${sum.toFixed(2).replace(".", ",")}<br>
          Lieferkosten: 1€<br>
          Gesamt: ${finalSum.toFixed(2).replace(".", ",")}
       </div>
  `;
  }
}

function increaseDish(i) {
  document.getElementById("basketItems").innerHTML = ``;
  amountBasket[i]++;
  updateShoppingBasket();
  renderBasket();
}

function decreaseDish(i) {
  document.getElementById("basketItems").innerHTML = ``;
  amountBasket[i]--;
  if (amountBasket[i] < 1) {
    shoppingBasket.splice([i], 1);
    prices.splice([i], 1);
    amountBasket.splice([i], 1);
  }
  updateShoppingBasket();
  renderBasket();
}

function deleteDish(i) {
  document.getElementById("basketItems").innerHTML = ``;
  shoppingBasket.splice([i], 1);
  prices.splice([i], 1);
  amountBasket.splice([i], 1);

  updateShoppingBasket();
  renderBasket();
  renderCategorie();
}

function changeColor(option) {
  var abholenDiv = document.getElementById("take");
  var liefernDiv = document.getElementById("deliver");

  if (option === "take") {
    abholenDiv.style.backgroundColor = "white";
    liefernDiv.style.backgroundColor = "";
  } else if (option === "deliver") {
    liefernDiv.style.backgroundColor = "white";
    abholenDiv.style.backgroundColor = "";
  }
  updateShoppingBasket();
}

window.onload = function () {
  var abholenDiv = document.getElementById("take");
  var liefernDiv = document.getElementById("deliver");
  abholenDiv.style.backgroundColor = "white";
  liefernDiv.style.backgroundColor = "";
};

function show() {
  document.getElementById("basketContainer").classList.remove("basketContainer");
  document.getElementById("basketContainer").classList.remove("d-none");
  document.getElementById("basketContainer").classList.add("responsiveBasket");
}

function closeDialog() {
  document.getElementById("basketContainer").classList.remove("responsiveBasket");
  document.getElementById("basketContainer").classList.add("basketContainer");
}