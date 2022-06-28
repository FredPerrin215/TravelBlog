const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropBtn = document.querySelector("#dropbtn");
const dropDown = document.querySelector(".dropdown");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  dropBtn.addEventListener("click", () => {
    dropDown.classList.toggle("active");
  })

  var lastScrollTop;
  navbar = document.getElementById('header');
  window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
  navbar.style.top='-150px';
  }
  else{
  navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
  });
