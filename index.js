const men = document.getElementById("button-men");
const women = document.getElementById("button-women");
const accessories = document.getElementById("button-accessories");
const main = document.getElementById("main");
const sections = document.querySelectorAll("section");
const header = document.getElementById("header");
const images = document.querySelectorAll("img");
const item_page = document.getElementById("item-page");
const item_image = document.getElementById("item-image");

const showSelected = (id) => {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  header.style.display = "block";
  document.getElementById(`${id}`).style.display = "block";
};

document.addEventListener("DOMContentLoaded", function () {
  const div = document.createElement("div");
  let search = document.getElementById("search");
  search.addEventListener("change", () => {
    actual_search = search.value;
    if (actual_search == "men") {
      main.style.visibility = "hidden";
      document.getElementById("formen").style.visibility = "visible";
    }

    if (actual_search == "women") {
      main.style.visibility = "hidden";
      document.getElementById("forwomen").style.visibility = "visible";
    }
  });

  men.onclick = function () {
    console.log("men clicked");
    showSelected(this.dataset.name);
  };

  women.onclick = function () {
    console.log("women clicked");
    showSelected(this.dataset.name);
  };

  accessories.onclick = function () {
    console.log("accesories clicked");
    showSelected(this.dataset.name);
  };

  item_page.style.display = "none";

  images.forEach((image) => {
    image.addEventListener("click", () => {
      item_page.style.display = "block";
      item_image.innerHTML += `<h1>${image.alt}</h1>`;
      item_image.innerHTML += `${image.outerHTML}`;
    });
    image.addEventListener("click", () => {
      main.style.display = "none";
    });
    image.addEventListener("mouseenter", () => {
      image.style.border = "1px solid red";
    });
    image.addEventListener("mouseleave", () => {
      image.style.border = "none";
    });
    item_image.addEventListener("mouseenter", () => {
      image.style.border = "1px solid red";
    })
    
    item_image.addEventListener("mouseleave", () => {
      image.style.border = "none";
    });
  });
});

