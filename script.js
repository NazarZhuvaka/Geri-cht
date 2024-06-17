// function navToggle() {
// 	document.getElementById("headerUl").classList.toggle("_active");
// 	document.getElementById("html").classList.toggle("_overflow");
// }

// window.onload = function() {
//     window.setInterval(function(){
//         var date = new Date();

//         var years = date.getFullYear();

//         var clock = years;

//         document.getElementById("year-clock").innerHTML = clock;
//     }
//     );
// }

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  spaceBetween: "20",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  autoplay: {
    delay: 5000,
  },
});

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");
const mainContainer = document.getElementById("mainContainer");

const tabBackgrounds = {
  tab1: 'url("./../img/beer.png")',
  tab2: 'url("./../img/food.png")',
  tab3: 'url("./../img/desert.png")',
};

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }
    this.classList.add("tab-controls__btn--active");

    for (let product of tabsProducts) {
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    const bgImage = tabBackgrounds[this.dataset.tab];
    mainContainer.style.backgroundImage = bgImage;
  });
}

const datingItems = document.querySelectorAll(".dating-item");

datingItems.forEach((item, index) => {
  const arrow = item.querySelector(".dating-item__arrow");
  const dropMenu = document.querySelectorAll(".dating-item__dropmenu")[index];
  const datingText = item.querySelector(".dating-item__text");

  arrow.addEventListener("click", () => {
    dropMenu.classList.toggle("none");
  });

  dropMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropmenu__text")) {
      datingText.textContent = event.target.textContent;
      dropMenu.classList.add("none");
    }
  });
});
