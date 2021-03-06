let dataIfor = [
  {
    icon: "fal fa-infinity",
    header: "Up to 365 days/year",
    content:
      "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
  },
  {
    icon: "fal fa-stopwatch",
    header: "Ready in 20 minutes",
    content:
      "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
  },
  {
    icon: "fal fa-carrot",
    header: "100% organic",
    content:
      "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
  },
  {
    icon: "fal fa-shopping-cart",
    header: "Order anything",
    content:
      "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
  },
];
function renderIfor(data) {
  let cardInfor = document.querySelector(".s2-content");

  cardInfor.innerHTML = "";
  for (let i = 0; i < dataIfor.length; i++) {
    let html = `<div class="infor">
        <i class="${dataIfor[i].icon}"></i>
        <h3>${dataIfor[i].header}</h3>
        <p>${dataIfor[i].content}</p>
        </div>`;
    cardInfor.innerHTML += html
  }
}
renderIfor(dataIfor)