window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menubtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItem = document.querySelectorAll(".navigation a");
  menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  navigationItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menubtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });

  const scrollbtn = document.querySelector(".scrollToTop-btn");
  window.addEventListener("scroll", () => {
    scrollbtn.classList.toggle("active", window.scrollY > 680);
  });
  scrollbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
