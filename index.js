//This is for both index.html and try.html
const index = document.getElementById("index-main");
const home = document.getElementById("home");
const mainimg = document.getElementById("main-img");
const smallimg = document.getElementsByClassName("small-img");

document.addEventListener("DOMContentLoaded" , function() {
  smallimg[0].addEventListener("click", () => {
    mainimg.src = smallimg[0].src;
  })
  smallimg[1].addEventListener("click", () => {
    mainimg.src = smallimg[1].src;
  })
  smallimg[2].addEventListener("click", () => {
    mainimg.src = smallimg[2].src;
  })
  smallimg[3].addEventListener("click", () => {
    mainimg.src = smallimg[3].src;
  })
})





























// const men = document.getElementById("button-men");
// // const women = document.getElementById("button-women");
// // const accessories = document.getElementById("button-accessories");
// const home = document.getElementById("home");
// const about = document.getElementById("about");
// const summary = document.getElementById("summary");
// const shop = document.getElementById("shop");
// const main = document.getElementById("main");
// const sections = document.querySelectorAll("section");
// const header = document.getElementById("header");
// const images = document.querySelectorAll("img");
// const item_page = document.getElementById("item-page");
// const item_image = document.getElementById("item-image");
// const increase = document.getElementById("increment");
// const decrease = document.getElementById("decrement");
// let quan = document.getElementById("quan");
// const trymain = document.getElementById("trymain")
// const cart = [];

// const showSelected = (id) => {
//   sections.forEach((section) => {
//     section.style.display = "none";
//   });
//   header.style.display = "block";
//   document.getElementById(`${id}`).style.display = "block";
// };

// document.addEventListener("DOMContentLoaded", function () {
//   home.addEventListener("click", () => {
//     main.style.display = "none";
//     trymain.style.display = "block";
//   })
//   const div = document.createElement("div");
//   let search = document.getElementById("search");
//   search.addEventListener("change", () => {
//     actual_search = search.value;
//     if (actual_search == "men") {
//       main.style.visibility = "hidden";
//       document.getElementById("formen").style.visibility = "visible";
//     }

//     if (actual_search == "women") {
//       main.style.visibility = "hidden";
//       document.getElementById("forwomen").style.visibility = "visible";
//     }
//   });

//   men.onclick = function () {
//     console.log("men clicked");
//     showSelected(this.dataset.name);
//   };

//   women.onclick = function () {
//     console.log("women clicked");
//     showSelected(this.dataset.name);
//   };

//   accessories.onclick = function () {
//     console.log("accesories clicked");
//     showSelected(this.dataset.name);
//   };

//   item_page.style.display = "none";

//   // console.log(images);
//   images.forEach((image) => {
//     image.addEventListener("click", () => {
//       let quantity = 0;
//       item_page.style.display = "block";
//       item_image.innerHTML += `<h1>${image.alt}</h1>`;
//       item_image.innerHTML += `${image.outerHTML}`;
//       increase.addEventListener("click", () => {
//         quantity++;
//         cart.push(image.alt);
//         quan.innerHTML = quantity;
//       });
//       decrease.addEventListener("click", () => {
//         quantity--;
//         cart.pop(image.alt);
//         if (quan.innerHTML == "0") {
//           quantity = 0;
//         }
//         quan.innerHTML = quantity;
//       });
//     });
//     image.addEventListener("click", () => {
//       main.style.display = "none";
//     });
//     image.addEventListener("mouseenter", () => {
//       image.style.border = "1px solid red";
//     });
//     image.addEventListener("mouseleave", () => {
//       image.style.border = "none";
//     });
//     item_image.addEventListener("mouseenter", () => {
//       image.style.border = "1px solid red";
//     });

//     item_image.addEventListener("mouseleave", () => {
//       image.style.border = "none";
//     });
//   });
// });

