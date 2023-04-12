$(".description__slider").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button class="description__slider-btn slider-btn--prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
  nextArrow:
    '<button class="description__slider-btn slider-btn--next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
});

//Menu-burger=====================================================
const menuBtn = document.querySelector(".header__menu-btn");
const navList = document.querySelector(".header__list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navList.classList.toggle("active");
});
document.querySelectorAll(".header__list-link").forEach((n) => {
  n.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navList.classList.remove("active");
  });
});

$(".questions__item").on("click", function () {
  $(".questions__item").removeClass("questions__item--active");
  $(this).addClass("questions__item--active");
});
