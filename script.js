let tg = window.Telegram.WebApp;
var items = JSON.parse(fetch('./items.json'));

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText("Order");
tg.MainButton.show();
