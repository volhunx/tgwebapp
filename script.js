let tg = window.Telegram.WebApp;
let response = fetch('./items.json');
let items = response.json;
let itemsDiv = document.getElementById("items");
itemsDiv.innerHTML = items;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Order");
tg.MainButton.show();
