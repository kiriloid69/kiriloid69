let burger = document.getElementById("burger-button");
let burgerList = document.querySelector(".burger__menu");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
  burgerList.classList.toggle("d-block");
  
});

function slowScroll (id) {
  var offset = 110;
  $('html,body').animate({
      scrollTop : $(id).offset ().top - offset
  }, 500);
  return false;
}


function accordeonEngine (id, idSec) {


  if ( $(id).hasClass('active-question') ){
    $(".card-header").removeClass("active-question")
    $(idSec).text("+")
  } else {
    $(".card-header").removeClass("active-question")
    $(id).addClass("active-question")
    $(".plus-icon").text("+")
    $(idSec).text("—")
  }
  if (screen.width <= 768) {
    setTimeout(() => 
      slowScroll(id), 500)
  }
};

$('.dropdown-toggle').click 
  $('dropdown-menu').toggle('show');

