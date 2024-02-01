let tg = window.Telegram.WebApp;
let itemsJSON = fetch('./items.json');
let itemsObj = JSON.parse(itemsJSON);
let itemsDiv = document.getElementById("items");
itemsDiv.innerHTML = "items div";
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Order");
tg.MainButton.show();
