let tg = window.Telegram.WebApp;
async function getItems(){
  let items = await fetch('./items.json');
  return items;
}
let itemsDiv = document.getElementById("items");
itemsDiv.innerHTML = getItems();
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Order");
tg.MainButton.show();
