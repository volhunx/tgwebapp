let tg = window.Telegram.WebApp;



addItems();
tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Order");
tg.MainButton.show();

async function addItems() {
  let itemsDiv = document.createElement("div");
  itemsDiv.className = "items";
  document.body.appendChild(itemsDiv);
  let items = await fetch('./items.json');
  items = await items.json();
  Object.entries(items).forEach(([key, value]) => {
    let itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
      <div class="item-emoji">${value.emoji}</div>
      <div class="item-info">${value.name} · <b>${value.price}</b></div>
      <button class="item-button" data-item="${key}">Add</button>
    `;
    itemsDiv.appendChild(itemDiv);
  });
}
