// Image change
const images = document.getElementsByClassName("app__main__images__single");
const activeImage = document.getElementsByClassName("active__image");
let thumb = document.getElementById("thumb__image");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    activeImage[0].classList.remove("active__image");
    const src = e.target.src;
    e.target.parentElement.classList.add("active__image");
    thumb.firstElementChild.src = src;
  });
}
// mobile menu
const mobileHandler = document.getElementById("mobileHandler");
const mainNavigation = document.getElementById("mainNavigation");
const main = document.getElementById("appMain");
mobileHandler.addEventListener("click", function (e) {
  if (mainNavigation.style.display == "block") {
    mainNavigation.style.display = "none";
    appMain.classList.remove("app__main__filtered");
  } else {
    mainNavigation.style.display = "block";
    mainNavigation.style.height = "100%";
    appMain.classList.add("app__main__filtered");
  }
});
main.addEventListener("click", function () {
  if (mainNavigation.style.display == "block") {
    mainNavigation.style.display = "none";
    appMain.classList.remove("app__main__filtered");
  }
  if (modal.classList.contains("modal__active")) {
    appMain.classList.remove("app__main__filtered");
    modal.classList.remove("modal__active");
  }
});
const modalBtns = document.getElementsByClassName("app__modal__trigger");
const modal = document.getElementById("app__modal");
for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    console.log("triggered!");
    modal.classList.add("modal__active");
  });
}
//modal__active
