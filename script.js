let tg = window.Telegram.WebApp;
var items = JSON.parse(fetch('./items.json'));
let itemsDiv = document.getElementById("items");
itemsDiv.innerHTML = "items div";
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Order");
tg.MainButton.show();
